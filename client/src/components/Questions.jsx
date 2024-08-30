import { useState } from "react";
import data from "../database/data";

export default function Questions() {
  const [checked, setChecked] = useState(undefined);
  const question = data[0];
  function onSelect() {
    console.log("radio button change");
  }

  return (
    <div>
      <h2 className=" text-lg mb-5">{question.question}</h2>
      <div className=" pl-2">
        {question.options.map((q, i) => (
          <div key={question.id} className="flex items-center mr-4 mb-4">
            <input
              type="radio"
              name="options"
              value={checked}
              className="hidden"
              id={`q${i}-options`}
              onChange={onSelect()}
            />
            <label
              htmlFor={`q${i}-options`}
              className="flex items-center cursor-pointer text-xl"
            >
              <span className="w-8 h-8 inline-block mr-2 rounded-full border border-grey flex-no-shrink "></span>
              {q}
            </label>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
