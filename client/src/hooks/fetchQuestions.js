import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// reduc action
import * as Action from "../redux/features/questionsSlice";
import { getServerData } from "../helper/helper";
// fetch questions hook to fetch api and set value to the store
export const useFetchQuestion = () => {
  const dispatch = useDispatch();
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });
  useEffect(() => {
    setGetData((prev) => ({
      ...prev,
      isLoading: true,
    }));

    // async function fetch backend data
    (async () => {
      try {
        const [{ questions, answers }] = await getServerData(
          `${import.meta.env.VITE_SERVER_HOSTNAME}/api/questions`,
          (data) => data
        );

        if (questions.length > 0) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
          }));
          setGetData((prev) => ({
            ...prev,
            apiData: questions,
          }));
          // dispatch an action
          dispatch(Action.startExamAction({ questions, answers })); // initializes the value to the store
        } else {
          throw new Error("No Questions Available!");
        }
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: true,
        }));
        setGetData((prev) => ({
          ...prev,
          serverError: error,
        }));
      }
    })();
  }, [dispatch]);
  // We added this dipsatch so we do not get an infinite loop for this useEffect
  return [getData, setGetData];
};

// moveNextAction Disptach function

export const moveNextQuestion = () => async (dispatch) => {
  try {
    await dispatch(Action.moveNextAction()); // Icrease the trace value by 1
  } catch (error) {
    console.log(error);
  }
};

// movePrevAction Disptach function

export const movePrevQuestion = () => async (dispatch) => {
  try {
    await dispatch(Action.movePrevAction()); // Decrease the trace value by 1
  } catch (error) {
    console.log(error);
  }
};
