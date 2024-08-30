import Questions from "./Questions";

export default function Quiz() {
  // Next button event handler
  function onNext() {
    console.log("On next click");
  }

  //Previous button event handler
  function onPrev() {
    console.log("On prev click");
  }

  return (
    <>
      {/* display questions */}
      <Questions />

      <div className="flex justify-between">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full before:content-['<-']"
          onClick={onPrev}
        >
          Prev
        </button>
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full after:content-['->']"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </>
  );
}
