import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Load configuration from .env file
dotenv.config({
  path: path.resolve(path.dirname(fileURLToPath(import.meta.url)), ".env"),
});

export default {
  repository: process.env.SPECIFY_REPOSITORY,
  personalAccessToken: process.env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: "Raw JSON from colors",
      path: "public/data/colors-list.json",
      filter: {
        types: ["color"],
      },
      parsers: [],
    },
  ],
};
