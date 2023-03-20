import Evidently from "aws-sdk/clients/evidently";
import config from "./config";

export const defaultClientBuilder = (endpoint, region) => {
  const credentials = {
    accessKeyId: config.credential.accessKeyId,
    secretAccessKey: config.credential.secretAccessKey
  };
  return new Evidently({
    endpoint,
    region,
    credentials
  });
};
