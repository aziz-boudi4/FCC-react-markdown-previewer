import React , {useState} from 'react';
import marked from 'marked';
import logo from './logo.svg';
import './App.css';

const placeholder =
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`
// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}

const App = () => {
  const [text, setText] = useState(placeholder);

  const handleTextAreaChange = event => {
    setText(event.target.value)
  };

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <Editor handleTextAreaChange={handleTextAreaChange} text={text}/>
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
    <div
      id="preview"
      style={{ background: 'cadetblue', width: "80%", minHeight: "800px"}}
      dangerouslySetInnerHTML={{__html: marked(props.text, { renderer: renderer })}}
    />
  )
}

export default App;
