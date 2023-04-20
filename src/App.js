import './App.css'; //import css from file from local
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextFormm from './components/TextFormm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  const [mode, setMode] = useState('light');  //whether dark mode enable or not
  const [alert, setAlert] = useState(null);

const showAlert = (message,type) => {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  },1500)
}

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Word Counter(Dark)";
    } 
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Word Counter(Light)";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
          <Route path='/' element={<TextFormm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>} />
          <Route path='/about' element = {<About  mode={mode}/>}/>
      </Routes>

      {/* <TextFormm showAlert={showAlert} heading="Enter the Text to analyze below" mode={mode}/>*/}
      {/* <About/>*/}
      </div>
    </Router>
    </>
  );
}
export default App;
