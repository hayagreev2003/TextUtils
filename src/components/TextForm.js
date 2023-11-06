import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase!", "success")
    }

    const handleLowClick = () => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowercase!", "success")
    }
    
    const handleClearClick = () => {
        let newText="";
        setText(newText);
        props.showalert("Cleared the text!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showalert("Copied the text!", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showalert("Removed extra spaces!", "success")
    }
    
    const [text, setText] = useState('');
    
    return (
        <>
            <div className='container' style={{color: props.mode === 'light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'light'?'white':'#063960',color: props.mode === 'light'?'black':'white'}} value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLowClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}} >
                <h1>Your text summary</h1>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview!"}</p>
            </div>
        </>
    )
}


