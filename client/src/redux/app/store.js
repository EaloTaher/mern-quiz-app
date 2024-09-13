import { configureStore } from "@reduxjs/toolkit";

import questionsReducer from "../features/questionsSlice";
import resultReducer from "../features/resultsSlice";

const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
});

export default store;
