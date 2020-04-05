import React, { Component } from 'react';
class Home extends Component {
  constructor() {
    super()
    this.state = {
      name: "张三",
      age: '30',
      userInfo: 
      {username: 'itying'}
    }
  }
  render() { 
      return(
      <div>
        <h1>react组件里面的所有节点要被根组件包含</h1>       
        <p>{this.state.name}</p>       
        <p>{this.state.age}</p>       
        <p>{this.state.userInfo.username}</p>       
      </div>
        ) 
  };
  
}
 
export default Home;