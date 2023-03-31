import { createSlice } from '@reduxjs/toolkit';

export const sliceFilter = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    qwery(state, action) {
      return (state = action.payload);
    },

    reset(state, action) {
      return (state = '');
    },
  },
});

export const { qwery, reset } = sliceFilter.actions;
