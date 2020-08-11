import Reviews from "../client/src/Components/Reviews.jsx";


describe("show six user reviews", () => {
  it("should show six total reviews", () => {
    let component = shallow(<Reviews />);
    expect(component.children("UserInfo")).toHaveLength(6);
  });
});