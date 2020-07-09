import { INITIATE_USER, LOGIN, LOGOUT } from "../actions/actionTypes.js";

const checkAdmin = {
  username: "testAdmin@gmail.com",
  password: "12345yuiopp",
};

const initialState = { username: "", admin: false, logged: false };

const cards = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_USER: {
      return JSON.parse(sessionStorage.user);
    }
    case LOGIN: {
      const { username, password } = action;
      const admin =
        checkAdmin.username === username && checkAdmin.password === password
          ? true
          : false;
      const newState = { username, admin, logged: true };

      sessionStorage.setItem("user", JSON.stringify(newState));
      return newState;
    }
    case LOGOUT: {
      sessionStorage.removeItem("user");
      return { ...initialState };
    }
    default: {
      return state;
    }
  }
};

export default cards;
