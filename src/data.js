import * as React from "react";

const useData = () => {
  const [matrix, setMatrix] = React.useState([
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1],
  ]);

  const [classes, setClasses] = React.useState([
    [["block"], ["block border-left border-right"], ["block"]],
    [
      ["block border-top border-bottom"],
      ["block border-left border-right border-top border-bottom"],
      ["block border-top border-bottom"],
    ],
    [["block"], ["block border-left border-right"], ["block"]],
  ]);

  const [turn, setTurn] = React.useState("USER");

  const state = {
    matrix,
    classes,
  };

  const isFinished = () => {
    for (let i = 0; i < 3; i++) {
      if (
        matrix[i][0] === matrix[i][1] &&
        matrix[i][1] === matrix[i][2] &&
        matrix[i][0] !== -1
      ) {
        console.log("done");
      } else if (
        matrix[0][i] === matrix[1][i] &&
        matrix[1][i] === matrix[2][i] &&
        matrix[0][i] !== -1
      ) {
        console.log("done");
      }
    }
    if (
      matrix[0][0] === matrix[1][1] &&
      matrix[1][1] === matrix[2][2] &&
      matrix[0][0] !== -1
    ) {
      console.log("done");
    } else if (
      matrix[0][2] === matrix[1][1] &&
      matrix[1][1] === matrix[2][0] &&
      matrix[0][2] !== -1
    ) {
      console.log("done");
    }
  };

  const handleBlockClick = (row, col) => {
    if (turn === "USER") {
      const mat = [...matrix];
      mat[row][col] = "X";
      setMatrix(mat);
      const cls = [...classes];
      cls[row][col].push("bg");
      setClasses(cls);
    }
  };

  React.useEffect(() => {
    isFinished();
  }, [matrix]);

  return {
    state,
    setMatrix,
    handleBlockClick,
  };
};

export default useData;
