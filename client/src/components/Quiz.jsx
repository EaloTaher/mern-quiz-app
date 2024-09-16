import { useDispatch, useSelector } from "react-redux";
import Questions from "./Questions";
import { useState } from "react";
import { moveNextQuestion, movePrevQuestion } from "../hooks/fetchQuestions";
import { pushAnswerAction } from "../redux/features/resultsSlice";
import { Navigate } from "react-router-dom";

// Redux store import
export default function Quiz() {
  const [answers, setAnswers] = useState([]); //Array to store answers for each question
  const dispatch = useDispatch();
  const { queue, trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);

  // Next button event handler
  function onNext() {
    if (trace < queue.length) {
      dispatch(moveNextQuestion());
      // Save the current answer to Redux only if we haven't already
      if (result.length <= trace) {
        dispatch(pushAnswerAction(answers[trace])); // ????
      }
    }
  }

  // Previous button event handler
  function onPrev() {
    if (trace > 0) {
      dispatch(movePrevQuestion());
    }
  }

  function onChecked(answer) {
    const updatedAnswers = [...answers];
    updatedAnswers[trace] = answer; // Save the current answer to Redux only if we haven't already
    setAnswers(updatedAnswers);
  }

  // Finished Exam After Last question
  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <>
      {/* display questions */}
      <Questions onChecked={onChecked} selectedAnswer={answers[trace]} />

      <div className="flex justify-between">
        {trace > 0 ? (
          <button
            className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full before:content-['⬅️']"
            onClick={onPrev}
          >
            {" "}
            Prev
          </button>
        ) : (
          <div></div>
        )}

        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full after:content-['➡️']"
          onClick={onNext}
        >
          Next{" "}
        </button>
      </div>
    </>
  );
}
