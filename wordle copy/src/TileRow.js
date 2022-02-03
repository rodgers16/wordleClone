import Tile from "./Tile";
import { useState } from "react";
import generateTileColors from "./generateTileColors";
import { arrayOfWords } from "./arrayOfWords";

const TileRow = ({ wordOfTheDay }) => {
  const [isRowDisabled, setIsRowDisabled] = useState(false);
  const [colorsArray, setColorsArray] = useState([]);

  function compareBothWords(e) {
    e.preventDefault();

    const { tile0, tile1, tile2, tile3, tile4 } = e.target;

    let enteredWord = [
      tile0.value,
      tile1.value,
      tile2.value,
      tile3.value,
      tile4.value,
    ].join("");

    if (wordOfTheDay === enteredWord) {
      setIsRowDisabled(true);
      setColorsArray(["green", "green", "green", "green", "green"]);
      alert("CONGRATULATIONS YOU FOUND THE enteredWord!");
    } else {
      if (arrayOfWords.indexOf(enteredWord.toLowerCase()) === -1) {
        return alert("That is not a word!");
      }
      const arrayValues = generateTileColors(wordOfTheDay, enteredWord);
      setColorsArray(arrayValues);
      setIsRowDisabled(true);
      console.log(wordOfTheDay);
    }
  }

  return (
    <div>
      <form
        onSubmit={compareBothWords}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {[...Array(5)].map((element, index) => (
          <Tile
            key={index}
            name={"tile" + index}
            isRowDisabled={isRowDisabled}
            compareBothWords={compareBothWords}
            tileColor={colorsArray[index]}
          />
        ))}

        <div>
          <button
            disabled={isRowDisabled}
            style={{
              padding: "15px",
              margin: "5px",
            }}
            type="submit"
          >
            Check Word
          </button>
        </div>
      </form>
    </div>
  );
};

export default TileRow;
