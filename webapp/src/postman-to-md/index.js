// eslint-disable no-console detect-non-literal-fs-filename

const args = require("minimist")(process.argv.slice(2));
const fs = require("fs");
const chalk = require("chalk");
const { createStructureOfMarkdown, writeFile } = require("./util");

/**
 * Init execution
 */
function init() {
  const path = args["_"];
  const outputDir = args["o"] || "docs/";
  if (path.length > 0) {
    console.log(chalk.green(`Reading file ${path[0]}`));

    if (fs.existsSync(path[0])) {
      console.log(chalk.green("Generating markdown file ..."));

      let rawData = fs.readFileSync(path[0]);
      const json = JSON.parse(rawData);

      const fileParts = path[0].split("/").pop().split(".");
      const fileName = fileParts[0];

      let pageHeader = "";
      const pageHeaderFile = `src/partials/${fileName}-header.md`;
      try {
        pageHeader = fs.readFileSync(pageHeaderFile);
      } catch (e) {
        console.log(
          chalk.yellow(`No header found for path '${pageHeaderFile}'.`)
        );
      }
      let markdown = createStructureOfMarkdown(json);
      markdown += "\n";
      writeFile(pageHeader + markdown, outputDir + fileName + ".mdx");
    } else {
      console.log(chalk.red("Path is not valid or the file not exist."));
    }
  } else {
    console.log(chalk.red("Path of json file is required."));
  }
}

init();
