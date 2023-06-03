/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.chains = this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {

    let chains = new Map

    for (
      let i = 0;
      i < this.words.length;
      i++
      ) {

        const word = this.words[i];
        const next = this.words[i+1] || null;

        if (chains[word]){
          chains[word].push(next);
        }

        else {
          chains[word] = [next]
        }

      }

    return chains

  }


  /** return random text from chains */

  makeText(numWords = 100) {
    // TODO
  }
}
