import * as React from "react";

import "./App.css";
import useData from "./data";
import Block from "./Components/Block";

const App = () => {
  const { state, handleBlockClick } = useData();

  const { matrix, classes } = state;

  console.log(matrix);

  return (
    <div className="App">
      {/* Navbar */}

      <nav className="nav">TIC TAC TOE</nav>

      {/* Board */}

      <div className="board-wrapper">
        <div className="board">
          {matrix.map((row, index) =>
            row.map((block, ind) => (
              <Block
                curr={block}
                handleClick={handleBlockClick}
                row={index}
                col={ind}
                cls={classes[index][ind]}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
