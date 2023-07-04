import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Load configuration from .env file
dotenv.config({
  path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".env"),
});

export default {
  version: "2",
  repository: process.env.SPECIFY_REPOSITORY,
  personalAccessToken: process.env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: "Raw SDTF",
      parsers: [
        {
          name: "as-is",
          output: {
            type: "file",
            filePath: "specify_output_public/tokens.json",
          },
        },
        {
          name: "css-custom-properties",
          output: {
            type: "file",
            filePath: "specify_output_public/tokens.css",
          },
        },
      ],
    },
  ],
};
