import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types";

const initialUserState: User = {
  id: 0,
  username: "",
  token: "",
  email: "",
  isLogged: false,
  address: "",
  shoppingCart: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentUserState: User, action: PayloadAction<User>): User => ({
      ...currentUserState,
      ...action.payload,
      isLogged: true,
    }),
    logoutUser: (currentUserState: User): User => ({
      ...currentUserState,
      isLogged: false,
    }),
  },
});

export const {
  loginUser: loginUserActionCreator,
  logoutUser: logOutUserActionCreator,
} = userSlice.actions;
export const userReducer = userSlice.reducer;
