import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialUserState = {} as User;

const userSlice = createSlice({
  name: "users",
  initialState: initialUserState,
  reducers: {
    loginUser: (currentUserState: User, action: PayloadAction<User>): User => ({
      ...action.payload,
      isLogged: true,
    }),
  },
});

export const { loginUser: loginUserActionCreator } = userSlice.actions;
export const userReducer = userSlice.reducer;
