import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate hook for programmatic navigation
import { setUserId } from "../redux/features/resultsSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [alertMessage, setAlertMessage] = useState(""); // State to manage the alert message

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current.value));
      navigate("/quiz"); // Navigate to the quiz page
    } else {
      setAlertMessage("Please enter a username to start the quiz."); // Set the alert message
    }
  }

  return (
    <div className="flex justify-center flex-col ">
      <ol>
        <li>1. You will be asked 5 questions one after another. </li>
        <li>2. 10 points is awarded for the correct answer.</li>
        <li>
          3. Each question has three options. You can choose only one option.
        </li>
        <li>4. You can review and change answers before the quiz finishes.</li>
        <li>5. The result will be declared at the end of the quiz.</li>
      </ol>
      <form
        id="form"
        className="mx-auto mt-4"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          startQuiz(); // Trigger quiz start on form submit (Enter key)
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Username"
          className="bg-white h-10 px-5 pl-10 rounded-full text-sm focus:outline-none text-black"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); // Prevent the default action (form submission)
              startQuiz(); // Start quiz when pressing Enter
            }
          }}
        />
      </form>
      {alertMessage && (
        <p className="text-red-500 mt-2 text-sm m-auto">{alertMessage}</p> // Display alert message if present
      )}
      <div className="mx-auto mt-5">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
          onClick={startQuiz}
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
