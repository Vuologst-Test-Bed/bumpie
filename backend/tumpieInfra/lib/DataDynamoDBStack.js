import { CfnOutput } from "@aws-cdk/core";
import * as dynamodb from "@aws-cdk/aws-dynamodb";
import * as sst from "@serverless-stack/resources";

export default class DataDynamoDBStack extends sst.Stack {
  // public reference to table
  dataTable;

  constructor(scope, id, props) {
    super(scope, id, props);

    const app = this.node.root;

    this.dataTable = new dynamodb.Table(this, "tumpieDataInfra-Table", {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST, // Use on-demand billing mode
      partitionKey: { name: "userId", type: dynamodb.AttributeType.STRING },
    });

    // Output values
    new CfnOutput(this, "tumpieDataInfra-TableName", {
      value: this.dataTable.tableName,
      exportName: app.logicalPrefixedName("tumpieDataInfra-TableName"),
    });
    new CfnOutput(this, "tumpieDataInfra-TableArn", {
      value: this.dataTable.tableArn,
      exportName: app.logicalPrefixedName("tumpieDataInfra-TableArn"),
    });
  }
}
