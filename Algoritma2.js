function longestWord(sentence) {
  return sentence
    .split(" ")
    .reduce((longest, current) =>
      current.length > longest.length ? current : longest
    );
}

const sentence = "Saya sangat senang mengerjakan soal algoritma";
const longest = longestWord(sentence);
console.log("Kata terpanjang:", longest);
