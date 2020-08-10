import UserInfo from "../client/src/Components/UserInfo.jsx";

describe("<UserInfo /> rendering", () => {
  it("should have an UserInfo component", () => {
    let component = shallow(<UserInfo />);
    expect(component.exists()).toBe(true);
  });
});

describe("Show user image", () => {
  it("should show the image of a user", () => {
    let component = shallow(<UserInfo />);
    expect(component.children("img")).toHaveLength(1);
  });
});

describe("Show a user's review", () => {
  it("should have a review for the house", () => {
    let component = shallow(<UserInfo />);
    expect(component.children("p")).toHaveLength(1);
  });
});

describe("Show users name and review date", () => {
  it("should have a user's name and date of review", () => {
    let component = shallow(<UserInfo />);
    expect(component.children("span")).toHaveLength(1);
  });
});