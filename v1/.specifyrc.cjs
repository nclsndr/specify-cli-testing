const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

module.exports = {
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
