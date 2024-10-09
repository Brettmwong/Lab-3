import ColorBox from "./ColorBox.jsx";
import colors from "../src/data/data";

const ColorBoxesContainer = () => {
  const renderRows = () => {
    let grid = [];
    for (let row = 0; row < 5; row++) {
      let rowBoxes = [];

      for (let colB = 0; colB < 5; colB++) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        rowBoxes.push(<ColorBox key={"${row}-{colB}"} color={randomColor} />);
      }

      grid.push(
        <div key={row} style={{ display: "flex" }}>
          {rowBoxes}
        </div>
      );
    }
    return grid;
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {renderRows()}
    </div>
  );
};
export default ColorBoxesContainer;
