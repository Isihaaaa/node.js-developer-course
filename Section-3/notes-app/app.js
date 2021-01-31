// es6 module import fs from 'fs';
const fs = require("fs");

fs.writeFileSync("note.txt", "Hi my name is Steve.");

fs.appendFileSync("./note.txt", " I'm 27 years old.");
