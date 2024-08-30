import { useRef } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const inputRef = useRef(null);

  return (
    <div className="flex justify-center flex-col ">
      <ol>
        <li>1. You will be asked 10 questions one after another. </li>
        <li>2. 10 points is awarded for the correct answer.</li>
        <li>
          3. Each question has three options. You can choose only one options.
        </li>
        <li>4. You can review and change answers before the quiz finishes.</li>
        <li>5. The result will be declared at the end of the quiz.</li>
      </ol>
      <form id="form" className="mx-auto mt-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Username"
          className="bg-white h-10 px-5 pl-10 rounded-full text-sm focus:outline-none text-black"
        ></input>
      </form>
      <div className="mx-auto mt-5">
        <Link
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full  "
          to={"quiz"}
        >
          {" "}
          Start Quiz{" "}
        </Link>
      </div>
    </div>
  );
}
