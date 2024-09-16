import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/features/questionsSlice";
import { resetResultAction } from "../redux/features/resultsSlice";
import {
  attempts_Number,
  earnedPoints_Number,
  flagResult,
} from "../helper/helper";
import { useEffect } from "react";
import { usePublishResult } from "../hooks/setResults";
import ResultTable from "./ResultTable";
export default function Result() {
  const {
    questions: { queue, answers },
    result: { result, userId },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  const totalPoints = queue.length * 10;
  const attempts = attempts_Number(result);
  const earnedPoints = earnedPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);
  // store user result
  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnedPoints,
    achieved: flag ? "Passed" : "Failed",
  });

  return (
    <>
      <div className="bottom-3 ">
        <div className="flex justify-between">
          <span>Username</span> <span className="bold">{userId}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Quiz Points:</span>{" "}
          <span className="bold">{totalPoints || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Questions: </span>{" "}
          <span className="bold">{queue.length || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Attempts: </span>{" "}
          <span className="bold">{attempts || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Total Earn Points: </span>{" "}
          <span className="bold">{earnedPoints || 0}</span>
        </div>
        <div className="flex justify-between">
          <span>Quiz Result: </span>{" "}
          <span
            className="bold"
            style={{ color: `${flag ? "#2aff95" : "#ff2a66"}` }}
          >
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <Link
          to={"/"}
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full  "
          onClick={onRestart}
        >
          Restart
        </Link>
      </div>
      <ResultTable />
    </>
  );
}
