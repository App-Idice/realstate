import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  mobile: "",
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const registered = localStorage.getItem("registeredNumber");
      if (action.payload === registered) {
        state.isAuthenticated = true;
        state.mobile = action.payload;
        state.error = "";
      } else {
        state.error = "❌ Invalid mobile number";
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.mobile = "";
      state.error = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
