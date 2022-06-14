import * as React from "react";

interface ITitleProps {}

const Title: React.FunctionComponent<ITitleProps> = (props) => {
  console.log("rendering title");

  return (
    <>
      <h2>Use Callback Hook</h2>
    </>
  );
};

export default React.memo(Title);
