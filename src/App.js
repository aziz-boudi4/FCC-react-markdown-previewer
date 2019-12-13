import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [text, setText] = useState("placeholder");

  const handleTextAreaChange = event => {
    setText(event.target.value)
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Editor handleTextAreaChange={handleTextAreaChange}/>
      <Preview text={text}/>
    </div>
    )
}

const Editor = (props) => {
  return (
    <textarea
        id="editor"
        style={{ width: "60%", marginBottom: "20px" }}
        rows="27"
        cols="120"
        value={props.text}
        onChange={props.handleTextAreaChange}
      />
   )
}

const Preview = (props) => {
  return (
    <div id="preview" style={{ background: 'cadetblue', width: "80%", height:"700px"}}>
      {props.text}
    </div>
  )
}

export default App;
