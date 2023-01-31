import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/alert';

function App() {
  const [Mode, setMode] = useState('light') //whether dark mode is enable or not

 const toggleMode = ()=>{
  if(Mode === 'dark'){
    setMode('light')
    document.body.style.backgroundColor ='white'
  }
  else{
    setMode ('dark')
    document.body.style.backgroundColor ='#151038'
  }
  }
  return (
    <>
    <div className=''>
      <Navbar title="Textutils" mode={Mode} toggleMode={toggleMode}/>
      <Alert alert="this is a alert"/>
      <div className="container">
        <TextForm title="Enter the text to analyse:" mode={Mode}/>
        {/* <About/> */}
      </div>
    </div>
    
    </>
      
  );
}

export default App;
