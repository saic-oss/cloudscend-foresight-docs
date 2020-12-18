"use strict";
const fs = require("fs");
const chalk = require(`chalk`);
/**
 * Create structure of markdown documentation
 * @param {object} docJson
 * @return {strinf} structure of markdown
 */
function createStructureOfMarkdown(docJson) {
  let markdown = "";

  // TODO parameterize the inclusion of the top level node
  // markdown += `# ${docJson.info.name}\n`
  // markdown +=  docJson.info.description !== undefined ? `${docJson.info.description || ''}\n` :''
  markdown += readItems(docJson.item);

  return markdown;
}

/**
 * Read auth of each method
 * @param {object} auth
 */
function readAuthorization(auth) {
  let markdown = "";
  if (auth) {
    markdown += `#### 🔑 Authentication ${auth.type}\n`;
    markdown += `\n`;
    markdown += `|Param|value|Type|\n`;
    markdown += `|---|---|---|\n`;
    if (auth.bearer) {
      auth.bearer.map((auth) => {
        markdown += `|${auth.key}|${auth.value}|${auth.type}|\n`;
      });
    }
    markdown += `\n`;
    markdown += `\n`;
  }

  return markdown;
}

/**
 * Read request of each method
 * @param {object} request information
 * @return {string} info of data about request options
 */
function readRequestHeaders(request) {
  let markdown = "";
  if (request && request.header) {
    markdown += '<TabItem value="req-headers">\n';
    request.header.map((header) => {
      markdown += `\n`;
      markdown += `|Key|Value|\n`;
      markdown += `|---|---|\n`;
      markdown += `|${header.key}|${header.value || ""}|\n`;
      markdown += `\n`;
      markdown += `\n`;
    });
    markdown += "</TabItem>";
  }
  return markdown;
}

function readResponseExamples(response) {
  let markdown = "";
  if (response && response.length > 0) {
    // since we don't have a good way of displaying a list of response examples just show the first
    markdown += `\n #### Example Response`;
    // response.map(exampleResponse => {
    let exampleResponse = response[0];
    // markdown += `\n ${exampleResponse.name} \`${exampleResponse.code}\` \n`
    // markdown += `\n`
    markdown += `\n<Tabs defaultValue="response-body" values={[{label: 'Body', value: 'response-body'}, {label: 'Headers', value: 'response-headers'}]}>`;

    markdown += `${readResponseBody(exampleResponse.body)}\n`;
    markdown += `${readResponseHeaders(exampleResponse.header)}\n`;
    markdown += `</Tabs>`;
    // })
  }
  return markdown;
}

function readResponseBody(body) {
  let markdown = '\n<TabItem value="response-body">\n';

  if (body) {
    // markdown += `##### Body \`JSON\`\n`
    markdown += `\n`;
    markdown += `\`\`\`json\n`;
    markdown += `${body}\n`;
    markdown += `\`\`\`\n`;
    markdown += `\n`;
  } else {
    // markdown += `##### Body \n`
    markdown += `\n_Empty Response Body_\n`;
  }
  markdown += "</TabItem>\n";
  return markdown;
}

function readResponseHeaders(headers) {
  let markdown = "";
  if (headers) {
    markdown = '\n<TabItem value="response-headers">\n';
    headers.map((header) => {
      markdown += `\n`;
      markdown += `|Key|Value|\n`;
      markdown += `|---|---|\n`;
      markdown += `|${header.key}|${escapeMarkdown(header.value) || ""}|\n`;
      markdown += `\n`;
      markdown += `\n`;
    });
  }
  markdown += "</TabItem>";
  return markdown;
}

const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[tag])
  );

const escapeMarkdown = (str) =>
  str.replace(
    /[\*]/g,
    (tag) =>
      ({
        "*": "\\*",
      }[tag])
  );

function readQueryParams(url) {
  let markdown = "";

  if (url.variable || url.query) {
    markdown += `\n<TabItem value="req-params">\n`;

    if (url.variable) {
      markdown += `\n ##### Path variables \n`;
      markdown += `|Key|Type|Description|\n`;
      markdown += `|---|---|------------|\n`;
      url.variable.map((query) => {
        markdown += `|${query.key}|${query.type || ""}|${
          query.description || ""
        }|\n`;
      });
      markdown += `\n`;
    }

    if (url.query) {
      markdown += `\n ##### Query parameters \n `;
      markdown += `|Key|Type|Description|\n`;
      markdown += `|---|---|------------|\n`;
      url.query.map((query) => {
        markdown += `|${query.key}|${query.type || ""}|${
          query.description || ""
        }|\n`;
      });
      markdown += `\n`;
    }
    markdown += `</TabItem>\n\n`;
  }

  return markdown;
}

/**
 * Read objects of each method
 * @param {object} body
 */
function readFormDataBody(body) {
  let markdown = "";

  if (body) {
    markdown += '<TabItem value="req-body">\n\n';
    if (body.mode === "raw") {
      markdown += `\`JSON\`\n`;
      markdown += `\n`;
      markdown += `\`\`\`json\n`;
      markdown += `${body.raw}\n`;
      markdown += `\`\`\`\n`;
      markdown += `\n`;
    } else if (body.mode === "formdata") {
      markdown += `\`${body.mode}\`\n`;
      markdown += `\n`;
      markdown += `|Param|Value|Type|Description|\n`;
      markdown += `|---|---|---|---|\n`;
      body.formdata.map((form) => {
        markdown += `|${form.key}|${
          form.type === "file"
            ? form.src
            : form.value !== undefined
            ? escapeHTML(form.value.replace(/\\n/g, ""))
            : ""
        }|${form.type}|${form.description}|\n`;
      });
      markdown += `\n`;
      markdown += `\n`;
    }

    markdown += "</TabItem>\n";
  }

  return markdown;
}

/**
 * Read methods of each item
 * @param {object} post
 */
function readMethods(method) {
  let markdown = "";

  markdown += `\n`;
  if (method.request) {
    const hasParams =
      method.request.url &&
      method.request.url.variable &&
      method.request.url.variable.length;
    const hasBody = method.request.body && method.request.body.mode.length;
    const hasHeaders = method.request.header && method.request.header.length;
    const defaultValue = hasParams
      ? "req-params"
      : hasBody
      ? "req-body"
      : "req-headers";
    markdown += `### ${method.name}\n`;
    markdown += `<ApiRequest httpMethod="${method.request.method}" url="${method.request.url.raw}"></ApiRequest> \n<br />\n\n`;
    markdown += `${method.request.description || ""}\n\n`;

    if (hasParams || hasHeaders || hasBody) {
      let tabValues = [];
      if (hasParams) {
        tabValues.push({ label: "Params", value: "req-params" });
      }
      if (hasHeaders) {
        tabValues.push({ label: "Headers", value: "req-headers" });
      }
      if (hasBody) {
        tabValues.push({ label: "Body", value: "req-body" });
      }

      markdown += `<Tabs defaultValue="${defaultValue}" values={${JSON.stringify(
        tabValues
      )}}>\n`;
      markdown += readQueryParams(method.request.url);
      markdown += readRequestHeaders(method.request);
      markdown += readFormDataBody(method.request.body);
      markdown += readAuthorization(method.request.auth);
      markdown += `\n</Tabs>\n`;
    }
    markdown += readResponseExamples(method.response);
    markdown += `\n`;
  } else {
    markdown += `### ${method.name}\n`;
    if (method.description) {
      markdown += `####: ${method.description || ""}\n`;
    }
  }
  markdown += `\n___ \n`;
  markdown += `\n`;

  return markdown;
}

/**
 * Read items of json postman
 * @param {object} items
 */
function readItems(items) {
  let markdown = "";
  items.forEach((item) => {
    if (item.item) {
      markdown += `## ${item.name} \n`;
      if (item.description) {
        markdown += `${item.description} \n`;
      }
      markdown += `\n`;

      item.item.forEach((item) => {
        markdown += readMethods(item);
        if (item.item) {
          item.item.forEach((item) => {
            markdown += readMethods(item);
          });
        }
      });
    } else {
      markdown += readMethods(item);
    }
  });

  return markdown;
}

/**
 * Create file
 * @param {string} content
 */
function writeFile(content, fileName) {
  fs.writeFile(`${fileName}`, content, function (err) {
    if (err) throw err;
    console.log(chalk.green(`Documentation was created correctly ${fileName}`));
  });
}

module.exports = {
  createStructureOfMarkdown,
  writeFile,
};
