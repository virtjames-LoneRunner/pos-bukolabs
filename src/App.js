import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App flex justify-center bg-blue-500 h-screen items-center">
      <img 
        src="https://images4.alphacoders.com/135/1358202.png" 
        alt="Ethics"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
