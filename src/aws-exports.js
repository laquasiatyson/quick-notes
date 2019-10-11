// WARNING: DO NOT EDIT. This file is automatically generated by AWS Amplify. It will be overwritten.

const awsmobile = {
  aws_project_region: "us-east-1",
  aws_cognito_identity_pool_id:
    "us-east-1:60c2e2f5-dd4c-4b68-9e51-d1a6a71772c2",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_7FMkMDHax",
  aws_user_pools_web_client_id: "22dg58e49f432v7cmeearduggf",
  oauth: {},
  aws_appsync_graphqlEndpoint:
    "https://4husob3ez5hdpik3frn4ayr3ye.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  predictions: {
    convert: {
      transcription: {
        region: "us-east-1",
        proxy: false,
        defaults: {
          language: "en-US"
        }
      },
      speechGenerator: {
        region: "us-east-1",
        proxy: false,
        defaults: {
          VoiceId: "Kendra",
          LanguageCode: "en-US"
        }
      }
    }
  }
};

export default awsmobile;
