/** Command-line tool to generate Markov text. */

const fs = require("fs");
const {MarkovMachine} = require("./markov");
const process = require("process");
const axios = require("axios");
const strip = require("string-strip-html")

function generateText(text) {
    const mm = new MarkovMachine(text);
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

async function makeTextFromURL(url) {

    let resp;

    try {
        resp = await axios.get(url);
    } catch (err) {
        console.error('Cannot reach URL')
        console.error(err)
        process.exit(1);
    }

    respNoHTML = strip.stripHtml(resp.data).result
    // console.log(respNoHTML)
    generateText(respNoHTML)
}

const method = process.argv[2]
const path = process.argv[3]

if (method === "file") {
    makeText(path);
}

else if (method === 'url') {
    makeTextFromURL(path);
}

else {
    console.error('Unknown method')
    process.exit(1)
}