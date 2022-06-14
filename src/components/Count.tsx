import { count } from "console";
import * as React from "react";

interface ICountProps {
  count: number;
  text: string;
}

const Count: React.FunctionComponent<ICountProps> = ({ count, text }) => {
  console.log("count component", count);

  return (
    <>
      <h2>
        {text} = {count}
      </h2>
    </>
  );
};

export default React.memo(Count);
