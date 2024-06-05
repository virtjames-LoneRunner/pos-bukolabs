import InputField from "./InputField";
import MainButton from "./mainButton";

function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <InputField placeholder={"Enter username"} type={"text"} />
      <InputField placeholder={"Enter password"} type={"password"} />

      <MainButton buttonText={"Login"} />
    </div>
  );
}

export default LoginForm;