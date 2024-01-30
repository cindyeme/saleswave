import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import type { CheckoutForm } from "@/types";

type CheckoutInitialState = {
  checkoutData: CheckoutForm | null;
};
const initialState: CheckoutInitialState = {
  checkoutData: null,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    SET_CHECKOUT_DATA: (state, { payload }) => {
      state.checkoutData = payload;
    },
  },
});

const checkoutState = (state: RootState) => state.checkout;

const { SET_CHECKOUT_DATA } = checkoutSlice.actions;

export { checkoutState, SET_CHECKOUT_DATA };

export default checkoutSlice.reducer;
