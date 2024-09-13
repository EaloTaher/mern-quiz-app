import { useState } from "react";
// Custom Hook
import { useFetchQuestion } from "../hooks/fetchQuestions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hooks/setResults";
import { useRef } from "react";

export default function Questions({ onChecked, selectedAnswer }) {
  const [checked, setChecked] = useState(selectedAnswer);
  const { trace } = useSelector((state) => state.questions);
  const { result } = useSelector((state) => state.result);
  const [{ isLoading, apiData, serverError }] = useFetchQuestion();
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);

  useEffect(() => {
    setChecked(selectedAnswer);
  }, [selectedAnswer]); // update the local state when the selected answer changes

  function onSelect(i) {
    onChecked(i);
    setChecked(i);
  }
  if (isLoading) return <h3>...Loading</h3>;
  if (serverError) return <h3>{serverError || "Unknown Error"}</h3>;

  return (
    <div>
      <h2 className=" text-lg mb-5">{questions?.question}</h2>
      <div className=" pl-2">
        {questions?.options.map((q, i) => (
          <div key={i} className="flex items-center mr-4 mb-4">
            <input
              type="radio"
              name="options"
              className="hidden"
              id={`q${i}-options`}
              onChange={() => {
                onSelect(i);
              }}
              checked={checked === i}
            />
            <label
              htmlFor={`q${i}-options`}
              className="flex items-center cursor-pointer text-xl"
            >
              <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink "></span>
              {q}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
