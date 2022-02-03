import { generateWordOfTheDay } from "./generateWordOfTheDay";
import TileRow from "./TileRow";

function App() {
  return (
    <div
      style={{
        paddingTop: "100px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {[...Array(6)].map((item, index) => (
        <TileRow key={index} wordOfTheDay={generateWordOfTheDay} />
      ))}
    </div>
  );
}

export default App;
