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

  const minimize = (mat) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (mat[i][j] === -1) {
          const copy = [...mat];
          copy[i][j] = "O";
        }
      }
    }
  };

  const isFinished = (mat) => {
    for (let i = 0; i < 3; i++) {
      if (
        mat[i][0] === mat[i][1] &&
        mat[i][1] === mat[i][2] &&
        mat[i][0] !== -1
      ) {
        if (mat[i][0] === "X") {
          return 1;
        } else {
          return -1;
        }
      } else if (
        mat[0][i] === mat[1][i] &&
        mat[1][i] === mat[2][i] &&
        mat[0][i] !== -1
      ) {
        if (mat[0][i] === "X") {
          return 1;
        } else {
          return -1;
        }
      }
    }
    if (
      mat[0][0] === mat[1][1] &&
      mat[1][1] === mat[2][2] &&
      mat[0][0] !== -1
    ) {
      if (mat[0][0] === "X") {
        return 1;
      } else {
        return -1;
      }
    } else if (
      mat[0][2] === mat[1][1] &&
      mat[1][1] === mat[2][0] &&
      mat[0][2] !== -1
    ) {
      if (mat[0][2] === "X") {
        return 1;
      } else {
        return -1;
      }
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
