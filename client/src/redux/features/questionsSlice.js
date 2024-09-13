import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  queue: [],
  answers: [],
  trace: 0,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,

  reducers: {
    startExamAction: (state, action) => {
      state.queue = action.payload.questions;
      state.answers = action.payload.answers;
    },
    moveNextAction: (state) => {
      state.trace += 1;
    },
    movePrevAction: (state) => {
      state.trace -= 1;
    },
    resetAllAction: () => {
      return {
        queue: [],
        answers: [],
        trace: 0,
      };
    },
  },
});

export default questionsSlice.reducer;
export const {
  startExamAction,
  moveNextAction,
  movePrevAction,
  resetAllAction,
} = questionsSlice.actions;
