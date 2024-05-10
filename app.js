// Import required modules
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();


app.get("/", (req, res) => {
  res.send("Hello, world!");
});


(require("./config/route-config.json") || []).forEach((file) => {
  app.get("/" + file.fs_route_path, (req, res) => {
    const currPath = path.join("./", file.fs_route_path);
    const currContent = fs.readFileSync(currPath);
    res.send(currContent.toString());
  });
});

// Start the server
const port = process.env.PORT || 3000; // Use the provided port or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
