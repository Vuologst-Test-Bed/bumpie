import { CfnOutput } from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
import * as sst from "@serverless-stack/resources";
import CognitoAuthRole from "./CognitoAuthRole";

export default class CognitoStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;
    const { dataTable, notificationTable } = props;

    // create new user in dynamodb
    const createUser = new sst.Function(this, "tumpieInfra-Create", {
      handler: "src/create.handler",
      environment: {
        dataTableName: dataTable.tableName,
        notificationTableName: notificationTable.tableName,
      },
    });
    dataTable.grantWriteData(createUser);
    notificationTable.grantWriteData(createUser);

    const userPool = new cognito.UserPool(this, "tumpieInfra-UserPool", {
      selfSignUpEnabled: true, // Allow users to sign up
      autoVerify: { email: true }, // Verify email addresses by sending a verification code
      signInAliases: { email: true }, // Set email as an alias
      lambdaTriggers: {
        postConfirmation: createUser,
        customMessage: new sst.Function(this, "tumpieInfra-CustomMsg", {
          handler: "src/CustomMsg.handler",
        }),
      },
    });

    const userPoolClient = new cognito.UserPoolClient(
      this,
      "tumpieInfra-UserPoolClient",
      {
        userPool,
        generateSecret: false, // Don't need to generate secret for web app running on browsers
      }
    );

    new cognito.UserPoolDomain(this, "tumpieInfra-UserPoolDomain", {
      userPool,
      cognitoDomain: {
        domainPrefix: "tumpieinfra",
      },
    });

    const identityPool = new cognito.CfnIdentityPool(
      this,
      "tumpieInfra-IdentityPool",
      {
        allowUnauthenticatedIdentities: false, // Don't allow unauthenticated users
        cognitoIdentityProviders: [
          {
            clientId: userPoolClient.userPoolClientId,
            providerName: userPool.userPoolProviderName,
          },
        ],
      }
    );

    const authenticatedRole = new CognitoAuthRole(
      this,
      "tumpieInfra-CognitoAuthRole",
      {
        identityPool,
      }
    );

    // Export values
    new CfnOutput(this, "tumpieInfra-UserPoolId", {
      value: userPool.userPoolId,
    });
    new CfnOutput(this, "tumpieInfra-UserPoolClientId", {
      value: userPoolClient.userPoolClientId,
    });
    new CfnOutput(this, "tumpieInfra-IdentityPoolId", {
      value: identityPool.ref,
    });
    new CfnOutput(this, "tumpieInfra-AuthenticatedRoleName", {
      value: authenticatedRole.role.roleName,
      exportName: app.logicalPrefixedName("tumpieInfra-CognitoAuthRole"),
    });
  }
}
