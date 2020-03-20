import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

let root = document.getElementById('root')


let test = <div>aaa</div>

let elementStyle = {
  background: 'skyblue',
  borderBottom: "3px solid red"
}
let classStr = "redBg"
let element = 
<div>
  helloworld
  <h2 className={classStr} style={elementStyle}>{1+1}</h2>
</div>
// let h1 = <h1>helloworld</h1>
// ReactDOM.render(h1, root)
// function clock(){
//   let time = new Date().toLocaleTimeString()
//   let element = (
//   <div>
//     <h1>现在的时间是{time}</h1>
//     <h1>这是副标题</h1>
//   </div>)
//   ReactDOM.render(element, root)
// }
// function Clock(props){
//   return(
//     <div>
//       <h1>现在的时间是{props.date.toLocaleTimeString()}</h1>
//       <h1>这是副标题</h1>
//     </div>
//   )
// }

// function run(){
//   ReactDOM.render(
//     <Clock date={new Date()}></Clock>
//   , root)
// }
ReactDOM.render(element, root)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
