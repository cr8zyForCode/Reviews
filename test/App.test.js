import App from '../client/src/Components/App.jsx';

describe("<App /> rendering", () => {
  it("should render one <h3>", () => {
    let wrapper = shallow(<App />);
    expect(wrapper.children("h3")).toHaveLength(1);
  });
});
