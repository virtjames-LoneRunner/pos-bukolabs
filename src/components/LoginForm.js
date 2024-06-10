import InputField from "./InputField";
import MainButton from "./mainButton";

function LoginForm() {
  return (
    <div className="bg-gray-200 shadow-lg">
      <h1>Login</h1>
      <InputField placeholder={"Enter username"} type={"text"} />
      <InputField placeholder={"Enter password"} type={"password"} />

      <MainButton buttonText={"charlie gwapo"} />
    </div>
  );
}

export default LoginForm;
