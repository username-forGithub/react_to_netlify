/* eslint-disable */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchText = createAsyncThunk(
  'fetchGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/greetings');
    const data = await response.json();
    const newdata = data.map((item) => ({ ...item }));
    return newdata;
  },
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: [],
    status: null,
    error: null,
  },

  extraReducers: {
    [fetchText.pending]: (state) => {
      state.status = 'pending';
      state.error = null;
    },
    [fetchText.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.greeting = action.payload;
      // console.log(action.payload);
    },
    [fetchText.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default greetingSlice;
