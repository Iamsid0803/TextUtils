// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [textColor, setText] = useState("dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "rgb(33,37,41)";
      showAlert("Dark Mode Enabled", "success");
    } else {
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "rgb(248,249,250)";
      showAlert("Dark Mode Disabled", "danger");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        linkText="About"
        mode={mode}
        togglemode={togglemode}
        textColor={textColor}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to analyze"
          mode={mode}
          togglemode={togglemode}
          textColor={textColor}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
