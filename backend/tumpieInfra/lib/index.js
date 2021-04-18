import DataDynamoDBStack from "./DataDynamoDBStack";
import NotificationDynamoDBStack from "./NotificationDynamoDBStack";
import CognitoStack from "./CognitoStack";

export default function main(app) {
  const dataDb = new DataDynamoDBStack(app, "tumpieDataInfraDynamodb");
  const notificationDb = new NotificationDynamoDBStack(
    app,
    "tumpieNotificationInfraDynamodb"
  );

  new CognitoStack(app, "tumpieInfraCognito", {
    dataTable: dataDb.dataTable,
    notificationTable: notificationDb.notificationTable,
  });
}
