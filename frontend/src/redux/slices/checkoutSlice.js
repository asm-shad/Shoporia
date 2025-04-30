import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create a Stripe Checkout session
export const createStripeSession = createAsyncThunk(
  "checkout/createStripeSession",
  async (checkoutItems, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/create-stripe-session`,
        { checkoutItems }, // pass inside { checkoutItems }
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return response.data; // returns { id: sessionId }
    } catch (error) {
      return rejectWithValue(error.response?.data || "An error occurred");
    }
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    sessionId: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStripeSession.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStripeSession.fulfilled, (state, action) => {
        state.loading = false;
        state.sessionId = action.payload.id; // sessionId returned from backend
      })
      .addCase(createStripeSession.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default checkoutSlice.reducer;