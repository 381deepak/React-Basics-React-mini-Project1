import React,{useState}from 'react'
import '../styles/App.css';
import { Preview } from './Preview';
const App = () => {
const [state, setState]=useState("hello world");
const [padding, setPadding]=useState("5");
const [fontsize, setFontsize]=useState("10");

  return (<>
    <div id="main">
      <div>
        {/* add input elememnts inside here */}
        Content: <input type="text" id="contentInput" value={state} onChange={(e)=>setState(e.target.value)} />
        <br></br>
        Padding:<input type="number" id="fontSizeInput"  value={padding} onChange={(e)=>setPadding(e.target.value)} />
        <br></br>
        Font Size:<input type="number" id="paddingInput" value={fontsize} onChange={(e)=>setFontsize(e.target.value)} />
      </div> 
 {/* render Preview component here */}
 <Preview fontSize={fontsize+"px"} content={state} padding={padding+"px"} />
    </div>
    </>
  )
}
export default App;
