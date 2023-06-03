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

    const chains = new Map();

    for (
      let i = 0;
      i < this.words.length;
      i++
      ) {

        const word = this.words[i];
        const next = this.words[i+1] || null;

        if (chains.get(word)){
          chains.get(word).push(next);
        }

        else {
          chains.set(word, [next]);
        }

      }

    return chains

  }


  /** return random text from chains */

  makeText(numWords = 100) {

    const keys = Array.from(this.chains.keys())
    const randomInitialKey = keys[Math.floor(Math.random() * keys.length)];
    let key = randomInitialKey

    const textArray = []

    for (let i=0; i<numWords; i++){

      const values = this.chains.get(key)

      const randomValue = values[Math.floor(Math.random() * values.length)]

      if (randomValue != null) {

        textArray.push(randomValue)

        key = randomValue

      }

      else {

        return textArray.join(' ');

      }

    }

    return textArray.join(' ');

  }
}
