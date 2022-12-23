import React, { useState } from 'react'



export default function TextForm(prop) {
  const handelUpClick =()=>{
    // console.log("Upper Case was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText) 
  }
  const handleLoClick =()=>{
    // console.log("Upper Case was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText) 
  }
  const handleCaClick =()=>{
    // console.log("Upper Case was clicked"+ text);
    let newText = handleCaClick[0].toUpperCase() + handleCaClick.substring(1);
    setText(newText) 
  }
  const handleClearText =()=>{
    // console.log("Upper Case was clicked"+ text);
    let newText = ('');
    setText(newText) 
  }

  const handleOnChange =(event)=>{
    // console.log("on change");
    setText(event.target.value)
  }
  const handleCopy = ()=> {
    console.log("I am a copy")
    let text = document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
}


  const [text, setText] = useState('');
  return (
    <>
      <div className=' bg-dark text-warning py-3 px-3 my-3'>
        <div className="form-group ">
            <label htmlFor="mybox" className='my-3'><h2>{prop.title}</h2></label>
            <textarea className="form-control" rows="8 " id="mybox" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary my-3 mx-1' onClick={handelUpClick}>Convert in UPPERCASE</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleLoClick}>Convert in lowercase</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCaClick}>Convert in Capitialize each word</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleExtraSpaces}> Remove extra spaces</button>
        <button className='btn btn-primary my-3 mx-1' onClick={handleClearText}>Clear Text</button>
      </div>
      <div className='conatiner'>
        <h2 className='bg-dark text-warning py-3 px-3 m-0'>Your Text summmary</h2>
        <p className='bg-danger text-light py-3 px-3 m-0'>{text.split(" ").length} Words and {text.length} Characters</p>
        <p className='bg-danger text-light py-3 px-3 m-0'>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2 className='bg-dark text-warning py-3 px-3 m-0'>Input Preview</h2>
        <p className='bg-light text-dark py-3 px-3 m-0 border border-primary border-3'>{text}</p>
      </div>
    </>
    
   ); 
}
