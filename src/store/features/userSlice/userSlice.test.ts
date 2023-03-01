import { User } from "../../../types";
import {
  loginUserActionCreator,
  logOutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  const initialState = {} as User;
  const logedInUser: User = {
    id: 1,
    username: "johnsmith",
    token: "abc123xyz456",
    email: "johnsmith@example.com",
    isLogged: true,
    address: "123 Main St, Anytown, USA",
    shoppingCart: [],
  };

  const notLoggedInUser: User = {
    id: 1,
    username: "johnsmith",
    token: "abc123xyz456",
    email: "johnsmith@example.com",
    isLogged: false,
    address: "123 Main St, Anytown, USA",
    shoppingCart: [],
  };

  describe("When it receives a user not logged in and the action to login", () => {
    test("Then it should return a user with the isLogged property as true", () => {
      const loginUserAction = loginUserActionCreator(notLoggedInUser);

      const newUserState = userReducer(initialState, loginUserAction);

      expect(newUserState).toStrictEqual(logedInUser);
    });
  });

  describe("When it receives a logged in user and the action to logout", () => {
    test("Then it should return the user initial state", () => {
      const logoutUserAction = logOutUserActionCreator();

      const newUserState = userReducer(logedInUser, logoutUserAction);

      expect(newUserState).toStrictEqual(notLoggedInUser);
    });
  });
});
