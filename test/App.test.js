import App from '../client/src/Components/App.jsx';
import Reviews from "../client/src/Components/Reviews.jsx";
import RatingsContainer from "../client/src/Components/RatingsContainer.jsx";

describe("<App /> rendering", () => {
  it("should have an App component", () => {
    let component1 = shallow(<Reviews />);
    let component2 = shallow(<RatingsContainer />)
    expect(component1.exists()).toBe(true);
    expect(component2.exists()).toBe(true);
  });
});

describe("Show more reviews button", () => {
  it("whould have a button to show more reviews", () => {
    let component = shallow(<App />);
    expect(component.children("button")).toHaveLength(1);
  });
});