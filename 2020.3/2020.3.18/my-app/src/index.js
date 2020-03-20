import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: new Date().toLocaleTimeString()
    }
  }

  render(){
    this.state.time = new Date().toLocaleTimeString();
    return ( 
      <div>
        <h1>当前时间: {this.state.time} </h1>
      </div>
    )
  }
  componentDidMount(){
    setInterval(() => {
      console.log(this.state)
      this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
  }
}

ReactDOM.render(<Clock />, document.getElementById('root'))

