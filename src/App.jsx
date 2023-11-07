import './App.css'
import Markdown from 'react-markdown';
import { useState } from 'react';
import { markdown } from './assets/markdownconstant';

function App() {
  
 let [text, setText] = useState(markdown);
  
 return (
      <div>
        <h1 style={{textAlign:"center"}}>MarkDown Previewer</h1>
        <div className="container">
          <textarea id="editor"  value={text} onChange={(event) => setText(event.target.value)}
          placeholder='enter your markdown here'>
          </textarea>
          <div id="preview">
            <Markdown>{text}</Markdown>
          </div>
        </div>
      </div>
  )
}

export default App
