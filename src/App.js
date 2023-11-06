import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [M, setM] = useState('Enable');
  const [alert, setalert] = useState(null);

  const showalert = (message, type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor='#042743'
      showalert("Dark Mode Enabled","success")
      setM('Disable')
      // document.title = 'TextUtils - DarkMode'
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing'
      // }, 2000);
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showalert("Dark Mode Disabled","success")
      setM('Enable')
      // document.title = 'TextUtils - LightMode'
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} M={M}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes> 
          {/* /users --> component 1
          /users/home --> component 2 */}
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/>}/>
          {/* <TextForm showalert={showalert} heading="Enter the text to analyze" mode={mode}/> */}
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
