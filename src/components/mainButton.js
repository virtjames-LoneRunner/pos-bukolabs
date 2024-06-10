function MainButton({ buttonText, handleButtonClick }) {
  return (
    <div>
      <button onClick={handleButtonClick} className="bg-blue-200 w-full">
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
