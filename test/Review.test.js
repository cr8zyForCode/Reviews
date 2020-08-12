import Reviews from "../client/src/Components/Reviews.jsx";

describe("reviews components renders", () => {
  it("should render the reviews component", () => {
    let component = shallow(<Reviews />);
    expect(component).toExists().toEqual(true);
  });
});