const testForNumbers = word => {
  if (typeof word === "number") {
    return true;
  }
  for (let characterIndex = 0; characterIndex < word.length; characterIndex++) {
    if (Number(word[characterIndex])) {
      return true;
    }
  }
  return false;
};

const testForSentence = word => {
  return word.includes(" ");
};

const getProperNouns = listOfWords => {
  const output = [];
  for (const word of listOfWords) {
    if (!testForNumbers(word) && !testForSentence(word)) {
      output.push(word);
    }
  }
  console.log(output);
  return output;
};

module.exports = { getProperNouns, easter: 42 };
