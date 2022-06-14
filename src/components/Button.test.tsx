import Button from "./Button";
import { shallow } from "enzyme";
import { useCallback, useState } from "react";

describe("Title component", () => {
  const defaultProps = {
    text: "",
    handleClick: () => {},
    testid: "",
  };
  const wrapper = shallow(<Button {...defaultProps} />);
  test("should render", () => {
    const btn = wrapper.find("button");
    btn.simulate("click");
  });
});
