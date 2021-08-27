import * as React from "react";

const useData = () => {
  const [abc, setAbc] = React.useState(["block"]);

  const changeClass = () => {
    setAbc([...abc, "bg"]);
  };

  return { abc, changeClass };
};

export default useData;
