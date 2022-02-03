import { useState } from "react";

const Tile = ({ isRowDisabled, name, tileColor }) => {
  const [letter, setLetter] = useState("");

  return (
    <input
      maxLength="1"
      style={{
        width: "50px",
        height: "50px",
        fontSize: "50px",
        textAlign: "center",
        padding: "10px",
        margin: "2px",
        background: isRowDisabled ? tileColor : "white",
      }}
      required
      name={name}
      value={letter}
      disabled={isRowDisabled}
      onChange={(e) => setLetter(e.target.value.toUpperCase())}
    />
  );
};

export default Tile;
