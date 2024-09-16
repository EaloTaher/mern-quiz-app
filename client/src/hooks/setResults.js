import { postServerData } from "../helper/helper";
import * as Action from "../redux/features/resultsSlice";

export const pushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushAnswerAction(result));
  } catch (error) {
    console.log(error);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (error) {
    console.log(error);
  }
};

// insert user data

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (!result.length || !username)
        throw new Error("Couldn't get result or username");
      await postServerData(
        `${import.meta.env.VITE_SERVER_HOSTNAME}/api/result`,
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
