const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

// app.get('/', (req, res) => res.send(''))

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
