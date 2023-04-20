import React,{useState} from 'react'

export default function TextFormm(props) {

  const [text,setText] = useState('');
  //setText("new text");
  const handleUpClick = () => {
    //console.log("Upper case clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick = () => {
    //console.log("Upper case clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!","success");
  }

  const handleClearText = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }

  const handleOnChange = (event) => {
    //console.log("on change");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    var newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges(); //to remove selection after copying
    props.showAlert("Copied","success");
  }
  
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    console.log(newText);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been deleted","success");
  }

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', 
            color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Upper case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lower case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copt Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Nothing to preview!"}</p>
    </div>
    </>
  )
}
