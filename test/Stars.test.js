import Stars from "../client/src/Components/Stars.jsx";

describe("<Stars /> rendering", () => {
  it("should have an App component", () => {
    let component = shallow(<Stars />);
    expect(component.exists()).toBe(true);
  });
});