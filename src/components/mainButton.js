function MainButton({ buttonText }) {
  const handleButtonClick = () => {
    console.log("CLICKED!");
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{buttonText}</button>
    </div>
  );
}

export default MainButton;
