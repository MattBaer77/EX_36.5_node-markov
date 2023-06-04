/** Command-line tool to generate Markov text. */

const fs = require("fs");
const {MarkovMachine} = require("./markov");
const process = require("process");
const axios = require("axios");

function generateText(text) {
    let mm = new MarkovMachine(text);
    console.log(mm.makeText());
}

function makeText(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) {
            console.error(`Cannot read: ${path}: ${err}`);
            process.exit(1);
        } else {
            generateText(data)
        }
    });
}


let method = process.argv[2]
let path = process.argv[3]

if (method === "file") {
    makeText(path);
}



else {
    console.error('Unknown method')
    process.exit(1)
}