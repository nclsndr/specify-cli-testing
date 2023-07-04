const dotenv = require("dotenv");
const path = require("path");

dotenv.config({
  path: path.resolve(__dirname, ".env"),
});

module.exports = {
  version: "2",
  repository: process.env.SPECIFY_REPOSITORY,
  personalAccessToken: process.env.SPECIFY_PERSONAL_ACCESS_TOKEN,
  rules: [
    {
      name: "Raw SDTF",
      parsers: [
        {
          name: "as-is",
          // output: { type: 'SDTF' },
          output: {
            type: "file",
            filePath: "public/tokens.json",
          },
        },
        {
          name: "css-custom-properties",
          // output: { type: 'SDTF' },
          output: {
            type: "file",
            filePath: "public/tokens.css",
          },
        },
      ],
    },
  ],
};
