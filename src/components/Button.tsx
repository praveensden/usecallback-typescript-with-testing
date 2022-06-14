import * as React from "react";

interface IButtonProps {
  handleClick: any;
  text: string;
  testid: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({
  handleClick,
  text,
  testid,
}) => {
  console.log("from button", text);

  return (
    <>
      <button data-testid={testid} onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default React.memo(Button);
