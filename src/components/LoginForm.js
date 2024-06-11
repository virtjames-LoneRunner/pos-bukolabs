import { useState } from "react";
import InputField from "./InputField";
import MainButton from "./mainButton";

function LoginForm() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    })
  } 

  const handleButtonClick = () => {
    console.log(userData);
  }

  return (
    <div className="bg-white bg-opacity-90 shadow-lg h-96 p-10 rounded-md">
      <h1 className="mb-8 font-bold text-3xl">LOGIN</h1>
      <InputField 
        placeholder={"Enter username"} 
        type={"text"} 
        handleInputChange={handleInputChange}
        name="username"
      />
      <InputField 
        placeholder={"Enter password"} 
        type={"password"} 
        handleInputChange={handleInputChange}
        name="password"
      />

      <MainButton buttonText={"Login"} handleButtonClick={handleButtonClick}/>
    </div>
  );
}

export default LoginForm;
