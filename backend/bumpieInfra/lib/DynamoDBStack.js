import { CfnOutput } from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

export default class DynamoDBStack extends sst.Stack {
  // public reference to table
  table;

  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    this.table = new dynamodb.Table(this, "bumpieInfra-Table", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
    });

    // Output values
    new CfnOutput(this, "bumpieInfra-TableName", {
      value: this.table.tableName,
      exportName: app.logicalPrefixedName("bumpieInfra-TableName"),
    });
    new CfnOutput(this, "bumpieInfra-TableArn", {
      value: this.table.tableArn,
      exportName: app.logicalPrefixedName("bumpieInfra-TableArn"),
    });
  }
}
