const fs = require("fs");
const chalk = require("chalk");

const addNote = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.some((note) => note.title === title);
  if (duplicateNotes) {
    console.log("Note title already taken");
    return;
  } else {
    console.log("Note added");
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
  }
};
const removeNote = (title) => {
  const notes = loadNotes();
  const modifiedNote = notes.filter((i) => i.title !== title);
  notes.length > modifiedNote.length
    ? console.log(chalk.red.inverse(`Removing note with title ${title}`))
    : console.log(chalk.blue.inverse(`No note found with the title`));
  saveNotes(modifiedNote);
};

const listNotes = () => {
  loadNotes().forEach((i) => {
    console.log(chalk.green.inverse(` ${i.title} - ${i.body}`));
  });
};

const readNote = (title) => {
  const note = loadNotes().find((i) => i.title === title);
  if (note) {
    console.log(chalk.green.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red("No note found with the mentioned title"));
  }
};
const loadNotes = () => {
  try {
    const data = fs.readFileSync("notes.json").toString();
    return JSON.parse(data);
  } catch (e) {
    return [];
  }
};

const saveNotes = (notes) => {
  fs.writeFileSync("notes.json", JSON.stringify(notes));
};
module.exports = { addNote, removeNote, listNotes, readNote };
