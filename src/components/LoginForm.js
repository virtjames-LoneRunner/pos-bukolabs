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
    });
  };

  const handleButtonClick = () => {
    console.log(userData);
  };

  return (
    <div className="bg-gray-200 shadow-lg h-96 p-10">
      <h1>Login</h1>
      <InputField
        placeholder={"Enter username"}
        type={"text"}
        handleInputChange={handleInputChange}
        name="username"
      />
      <br />
      <InputField
        placeholder={"Enter password"}
        type={"password"}
        handleInputChange={handleInputChange}
        name="password"
      />

      <br />
      <MainButton buttonText={"Login"} handleButtonClick={handleButtonClick} />
    </div>
  );
}

export default LoginForm;
