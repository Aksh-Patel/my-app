import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Upper")
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = ()=>{
        // console.log("Lower")
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = ()=>{
        // console.log("Lower")
        let newText = '';
        setText(newText);
        props.showAlert("Cleared Text","success");
    }
    const handleCopy = ()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied!!","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra space","success");
    }

    const handleOnChange = (event)=>{
        // console.log("on change")
        setText(event.target.value)
    }

    const [text,setText] = useState("");
  return (
    <>
        <div className="container" style={{color:(props.mode==='dark')?'white':'black'}}>
            <div className="mb-2">
                <h3 className="my-3">{props.heading}</h3>
                <textarea  value={text} className="form-control" id="myBox" rows="8" onChange={handleOnChange} style={{backgroundColor:(props.mode==='light')?'white':'#433d3e', color:(props.mode==='dark')?'white':'black'}}/>
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary my-2 mx-1" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container" style={{color:(props.mode==='dark')?'white':'black'}}>
            <h3> Your Text Summary </h3>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} Minutes read</p>
            <h3> Preview </h3>
            <p>{text.length>0?text:"Enter your text in the textbox to see the preview..."}</p>
        </div>
    </>
  )
}
