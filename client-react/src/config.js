const dev = {
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_KwBYGTVQR",
    APP_CLIENT_ID: "7mlm7icf5u5vhgv18uovgs9gpc",
    IDENTITY_POOL_ID: "us-east-1:97fa2b76-2e7f-48b1-8fa8-827351567a56",
  },
};

// const prod = {
//   cognito: {
//     REGION: "us-east-1",
//     USER_POOL_ID: "us-east-1_mhqAnffLQ",
//     APP_CLIENT_ID: "2u8n8nfi19hlus4o0rolcaoptb",
//     IDENTITY_POOL_ID: "us-east-1:3e765d63-9a42-42c4-ab1b-b4ec214cc902",
//   },
// };

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === "prod" ? dev : dev;

export default config;
