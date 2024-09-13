import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  result: [],
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    pushAnswerAction: (state, action) => {
      state.result.push(action.payload);
    },
    resetResultAction: () => {
      return {
        userId: null,
        result: [],
      };
    },
    updateResultAction: (state, action) => {
      const { trace, checked } = action.payload;
      state.result.fill(checked, trace, trace + 1);
    },
  },
});

export default resultSlice.reducer;
export const {
  setUserId,
  pushAnswerAction,
  resetResultAction,
  updateResultAction,
} = resultSlice.actions;
