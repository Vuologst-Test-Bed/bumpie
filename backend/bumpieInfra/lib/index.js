import DynamoDBStack from "./DynamoDBStack";
import CognitoStack from "./CognitoStack";

export default function main(app) {
  const db = new DynamoDBStack(app, "bumpieInfraDynamodb");

  new CognitoStack(app, "bumpieInfraCognito", { table: db.table });
}
