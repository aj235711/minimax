import * as React from "react";

import { animate } from "../../helpers";
import useData from "./data";

const Block = ({ curr, handleClick, row, col, cls }) => {
  const { abc, changeClass } = useData();

  return (
    <div
      className={cls.join(" ")}
      onClick={() => {
        changeClass();
        handleClick(row, col);
      }}
    >
      {curr !== -1 && curr}
    </div>
  );
};

export default Block;
