const notes = require("express").Router();
const { json } = require("express");
const {
  readFromFile,
  readAndAppend,
  writeToFile,
  readAndDelete
} = require("../helpers/fsUtils");
const { v4: uuidv4 } = require('uuid');

// GET method that reads db file and returns it
notes.get("/", (req, res) => 
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)))
);

// POST method that reads db file, add new note and appends to the file.
notes.post("/", (req, res) => {

  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };

    readAndAppend(newNote, "./db/db.json");
    res.json(`Note added successfully`);

  } else {
    res.status(500).json("Error saving note.");
  }
});

notes.delete('/:id', (req, res) => {
    readAndDelete('./db/db.json', req.params.id)
    res.json(`Note deleted successfully`);
});

module.exports = notes;
