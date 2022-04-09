import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import fetchLogin from "../auth/auth-thunks";
import { UserInterface } from "../../utils/users";

interface AuthState {
  userName: string;
  isAdmin: boolean;
  error: string;
}

const initialState: AuthState = {
  userName: "admin",
  isAdmin: true,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn(state, action: PayloadAction<UserInterface>) {
      state.userName = action.payload.login;
      state.isAdmin = action.payload.isAdmin;
      state.error = "";
    },
    signedOut(state) {
      state.userName = "";
      state.isAdmin = false;
    },
    errorOccured(state, action) {
      state.error = action.payload;
    },
  },
});

export const { loggedIn, signedOut, errorOccured } = authSlice.actions;
export default authSlice.reducer;
