import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = () => {
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success");
      document.title = 'TextUtils - Light Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing!!';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now..';
      // },1500);
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#403d3d';
      showAlert("Dark mode has been Enabled","success");
      document.title = 'TextUtils - Dark Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* /users --> component1
          /users/home --> component2 */}
            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyse below..." mode={mode}/>}/> */}
            <TextForm showAlert={showAlert} heading = "Enter the text to analyse below..." mode={mode}/>
            {/* <Route exact path="/about" element={<About />}/> */}

        {/* </Routes> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
