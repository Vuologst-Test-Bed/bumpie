var AWS = require("aws-sdk");

export const handler = async (event, context, callback) => {
  if (event.triggerSource === "PostConfirmation_ConfirmSignUp") {
    console.log("post confirmation start");
    console.log("event", event);
    console.log("context", context);
    console.log("env", process.env);

    let db = new AWS.DynamoDB.DocumentClient();

    const params = {
      TableName: process.env.tableName,
      Item: {
        userId: event.userName,
        data: [
          [
            { title: "hello there. first cat", value: 30 },
            { title: "there", value: 70 },
          ],
          [{ title: "cat 2", value: 0 }],
          [
            { title: "cat 3", value: 30 },
            { title: "1", value: 40 },
            { title: "2", value: 50 },
            { title: "3", value: 100 },
          ],
          [],
          [{ title: "final cat 5", value: 100 }],
        ],
      },
    };

    await db.put(params).promise();
  }

  callback(null, event);
};
