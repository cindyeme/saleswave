import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type AuthInitialState = {
  itemId: string | number | null;
};
const initialState: AuthInitialState = {
  itemId: null,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    setItemId: (state, { payload }) => {
      state.itemId = payload;
    },
    removeItemId: (state) => {
      state.itemId = null;
    },
  },
});

const checkoutSlice = (state: RootState) => state.general;

const { setItemId, removeItemId } = generalSlice.actions;

export { checkoutSlice, setItemId, removeItemId };

export default generalSlice.reducer;
