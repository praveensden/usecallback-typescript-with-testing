import ParentComponent from "./ParentComponent";
import { mount, shallow } from "enzyme";
import React, { useState } from "react";
describe("Title component", () => {
  const wrapper = mount(<ParentComponent />);
  const usecallback = jest
    .spyOn(React, "useCallback")
    .mockImplementation((f) => f());

  test("should render", () => {
    const ageBtn = wrapper.find(`[data-testid="agehandle"]`);
    const salaryBtn = wrapper.find(`[data-testid="salaryhandle"]`);
    ageBtn.simulate("click");
    salaryBtn.simulate("click");
  });
});
