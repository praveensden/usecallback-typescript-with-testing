import Title from "./Title";
import { shallow } from "enzyme";

describe("Title component", () => {
  const wrapper = shallow(<Title />);
  test("should render", () => {
    expect(wrapper.find("h2").text()).toBe("Use Callback Hook");
  });
});
