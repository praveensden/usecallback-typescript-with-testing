import Count from "./Count";
import { shallow } from "enzyme";

describe("Title component", () => {
  const defaultProps = {
    count: 0,
    text: "count",
  };
  const wrapper = shallow(<Count {...defaultProps} />);
  test("should render", () => {
    expect(wrapper.find("h2").text()).toBe("count = 0");
  });
});
