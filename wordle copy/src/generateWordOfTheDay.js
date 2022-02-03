import { arrayOfWords } from "./arrayOfWords";

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}
const findRandomWord = getRandomInt(0, arrayOfWords.length - 1);

const generateWordOfTheDay = arrayOfWords[findRandomWord].toUpperCase();

export { generateWordOfTheDay, arrayOfWords };
