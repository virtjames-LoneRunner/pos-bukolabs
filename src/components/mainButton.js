function MainButton({ buttonText, handleButtonClick }) {
  // const handleButtonClick = () => {
  //   console.log("CLICKED!");
  // };

  return (
    <div>
      <button onClick={handleButtonClick} className="bg-amber-300 w-full p-3" >
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
