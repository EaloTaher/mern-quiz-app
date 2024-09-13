import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/features/questionsSlice";
import { resetResultAction } from "../redux/features/resultsSlice";
import {
  attemps_Number,
  earnedPoints_Number,
  flagResult,
} from "../helper/helper";
import { useEffect } from "react";
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
  const attemps = attemps_Number(result);
  const earnedPoints = earnedPoints_Number(result, answers, 10);
  const flag = flagResult(totalPoints, earnedPoints);

  useEffect(() => {
    console.log(totalPoints);
    console.log(attemps);
    console.log(earnedPoints);
    console.log(flag);
  });

  return (
    <>
      <div className="bottom-3 ">
        <div className="flex justify-between">
          <span>Username</span> <span className="bold">Ealam Taher</span>
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
          <span>Total Attemps: </span>{" "}
          <span className="bold">{attemps || 0}</span>
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
      <div>
        <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-800 text-gray-200">
          <tr className="text-left border-b border-gray-300">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Attemps</th>
            <th className="px-4 py-3">Earn Points</th>
            <th className="px-4 py-3">Result</th>
          </tr>
          <tr className="bg-gray-700 border-b border-gray-600">
            <td className="px-4 py-3">Jill</td>
            <td className="px-4 py-3">03</td>
            <td className="px-4 py-3">20</td>
            <td className="px-4 py-3"></td>
          </tr>
        </table>
      </div>
    </>
  );
}
