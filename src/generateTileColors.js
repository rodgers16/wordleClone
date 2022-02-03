function generateTileColors(wordOfTheDay, enteredWord) {
  const letterCount = {};

  for (let char of wordOfTheDay) {
    letterCount[char] = letterCount[char] + 1 || 1;
  }

  const setTileColors = [];
  for (
    let currentLetter = 0;
    currentLetter < wordOfTheDay.length;
    currentLetter++
  ) {
    if (wordOfTheDay[currentLetter] === enteredWord[currentLetter]) {
      letterCount[enteredWord[currentLetter]]--;
      setTileColors.push("green");
    } else if (
      letterCount[enteredWord[currentLetter]] >= 1 &&
      wordOfTheDay[currentLetter] !== enteredWord[currentLetter]
    ) {
      letterCount[enteredWord[currentLetter]]--;
      setTileColors.push("gray");
    } else {
      setTileColors.push("white");
    }
  }
  return setTileColors;
}

export default generateTileColors;
