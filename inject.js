var html_file = require("path").join(process.resourcesPath, "app/index.html");
var html = require("fs").readFileSync(html_file, "utf8");
var link_to_inject = '<link href="https://rawgit.com/incace/matFlow/master/css/compressed/global.min.css" rel="stylesheet">';
html = html.replace(link_to_inject, "").replace("</head>", `\n${link_to_inject}</head>`);
require("fs").writeFileSync(html_file, html, "utf8");
location.reload();
