// const fs = require("fs");

// fs.writeFileSync("notes.txt", "hello");
// fs.appendFileSync("notes.txt", " This is added content via writeFileSync");

const fn = require("./notes");

const yargs = require("yargs");

yargs.version("1.1.0");

// add
yargs
  .command({
    command: "add",
    describe: "adds a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note's body",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      console.log("Note Title", argv.title);
      console.log("Note Body", argv.body);
      fn.addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "removes a note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      console.log(argv.title, "Removing  note");
      fn.removeNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "Lists the note",
    handler: function () {
      fn.listNotes();
    },
  })
  .command({
    command: "read",
    describe: "Reads the note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      fn.readNote(argv.title);
    },
  }).argv;
