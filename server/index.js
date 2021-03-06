import express from "express";
import path from "path";
import fs from "fs";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import App from "../src/App.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  const reactApp = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Error at readFile: ", err);
      return res.status(500).send("Something went wrong");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${reactApp}</div>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(
    "-------------------------------------------------------\n| View your SSR React app at ",
    "\x1b[36m",
    `http://localhost:${PORT}`,
    "\x1b[0m",
    "|\n-------------------------------------------------------"
  );
});
