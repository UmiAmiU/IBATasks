import React from "react";
import Card from "../Card";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { useSelector, useDispatch } from "react-redux";
import TextField from "../TextField";
import { MdModeEdit, MdDone, MdClose } from "react-icons/md";

const mockDispatchFn = jest.fn();
const mockHistoryPushFn = jest.fn();

jest.mock("react-redux", () => ({
  useDispatch: () => mockDispatchFn,
  useSelector: jest.fn(),
}));
jest.mock("React", () => ({
  useState: jest.fn(),
}));
jest.mock("react-router-dom", () => ({
  useHistory: () => ({
    push: mockHistoryPushFn,
  }),
}));
configure({ adapter: new Adapter() });

describe("<Card />", () => {
  let wrapper;
  const onCheckingMock = jest.fn();
  useSelector.mockImplementation((selector) =>
    selector({
      cards: [],
      user: { username: "", admin: false, logged: false },
    })
  );

  beforeEach(() => {
    wrapper = shallow(
      <Card
        id="a962c31d-4a92-4cc0-b610-7abecbcd85cb"
        header="Header"
        text="text"
        onChecking={onCheckingMock}
      />
    );
  });

  it("should render CardHeader", () => {
    expect(wrapper.find(CardHeader)).toHaveLength(1);
  });

  it("should render CardBody", () => {
    expect(wrapper.find(CardBody)).toHaveLength(1);
  });

  it("should set Change Mode in CardHeader", () => {
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");

    expect(wrapper.find(CardHeader).dive().find(MdModeEdit)).toHaveLength(0);
  });

  it("should set Change Mode in CardBody", () => {
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");

    expect(wrapper.find(CardBody).dive().find("textarea")).toHaveLength(1);
  });

  it("should change value on input", () => {
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");
    wrapper
      .find(CardHeader)
      .dive()
      .find(TextField)
      .simulate("change", { target: { value: "HeaderChange" } });

    expect(wrapper.find(CardHeader).prop("header")).toEqual("HeaderChange");
  });

  it("should deny changes on reject", () => {
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");
    wrapper
      .find(CardHeader)
      .dive()
      .find(TextField)
      .simulate("change", { target: { value: "HeaderChange" } });

    expect(wrapper.find(CardHeader).prop("header")).toEqual("HeaderChange");
    wrapper.find(CardHeader).dive().find(MdClose).simulate("click");

    expect(wrapper.find(CardHeader).prop("header")).toEqual("Header");
  });

  it("should apply changes on accept", () => {
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");
    wrapper
      .find(CardHeader)
      .dive()
      .find(TextField)
      .simulate("change", { target: { value: "HeaderChange" } });

    expect(wrapper.find(CardHeader).prop("header")).toEqual("HeaderChange");
    wrapper.find(CardHeader).dive().find(MdDone).simulate("click");
    const mockedDispatch = jest.fn();
    mockDispatchFn.mockReturnValue(mockedDispatch);

    expect(mockDispatchFn).toHaveBeenCalledWith({
      payload: {
        id: "a962c31d-4a92-4cc0-b610-7abecbcd85cb",
        header: "HeaderChange",
        text: "text",
      },
      type: "UPDATE_CARD",
    });
  });

  it("should set checked", () => {
    wrapper
      .find(CardHeader)
      .dive()
      .find("input[type='checkbox']")
      .simulate("change");

    expect(wrapper.find(CardHeader).prop("isChecked")).toEqual(true);
  });

  it("should redirect on double click", () => {
    wrapper.simulate("doubleClick");
    const mockedHistory = jest.fn();
    mockHistoryPushFn.mockReturnValue(mockedHistory);

    expect(mockHistoryPushFn).toHaveBeenCalledWith(
      "/card/a962c31d-4a92-4cc0-b610-7abecbcd85cb"
    );
  });

  it("should reset checked mode, when enabled edit mode", () => {
    wrapper
      .find(CardHeader)
      .dive()
      .find("input[type='checkbox']")
      .simulate("change");

    expect(wrapper.find(CardHeader).prop("isChecked")).toEqual(true);
    wrapper.find(CardHeader).dive().find(MdModeEdit).simulate("click");

    expect(onCheckingMock).toHaveBeenCalledTimes(3);
  });
});
