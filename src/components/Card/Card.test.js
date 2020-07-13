import React from "react";
import Card from "../Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardHeader";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock(`react-redux`, () => ({
  useDispatch: jest.fn(),
}));
configure({ adapter: new Adapter() });

describe("<Card />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card
        id="a962c31d-4a92-4cc0-b610-7abecbcd85cb"
        header="Header"
        text="text"
        onChecking={() => {}}
      />
    );
  });

  it("should render CardHeader", () => {
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it("should render CardBody", () => {
    expect(wrapper.find(CardBody)).toHaveLength(1);
  });
});
