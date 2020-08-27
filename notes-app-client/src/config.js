export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-2",
    BUCKET: "rodrigo-serverless-notes-app-uploads"
  },
  apiGateway: {
    REGION: "us-east-2",
    URL: "https://mzzf7z77hi.execute-api.us-east-2.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-2",
    USER_POOL_ID: "us-east-2_LG5802XXX",
    APP_CLIENT_ID: "6o5qhtrmfp9ongviducb6krosn",
    IDENTITY_POOL_ID: "us-east-2:acdb28f6-bf1c-4c68-ab17-3f8ac438b05f"
  }
};
  