function countQueryWordsInInput(input, query) {
  const wordCount = {};
  input.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const result = query.map((q) => wordCount[q] || 0);
  return result;
}

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

const output = countQueryWordsInInput(INPUT, QUERY);
console.log("OUTPUT =", output);
