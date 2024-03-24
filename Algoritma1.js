function reverseAlphabetWithNumber(stringNegie) {
  const letters = stringNegie.replace(/[0-9]/g, "").split("");
  const numbers = stringNegie.match(/[0-9]/g);

  const reversedLetters = letters.reverse();

  const result = reversedLetters.join("") + numbers.join("");

  return result;
}

const stringNegie = "NEGIE1";
const reversedString = reverseAlphabetWithNumber(stringNegie);
console.log("Hasil =", reversedString);
