import React, {Component, Fragment} from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'

class Xiaojiejie extends Component{
  constructor(props){
    super(props)
    this.state={
      inputValue: '',
      list: ['基础按摩', '精油推背']
    }
  }
  render(){
    return (
      <Fragment>
      {/* 第一次写注释 */}
      <div>
        <div>
          <label htmlFor="jspang">增加服务</label>
          <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button></div>
        <ul>
          {/* <li key={ index + item }
            onClick={this.deleteItem.bind(this, index)}
            dangerouslySetInnerHTML={{__html:item}}></li> */}
          {
            this.state.list.map((item, index) => {
            return (
                <XiaojiejieItem 
                  key={index+item}
                  content={item} 
                  deleteItem={this.deleteItem.bind(this)}/>
            )
            })
          }
        </ul>
      </div>
      </Fragment>
    )
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  deleteItem(index) {
    let list = this.state.list
    list.splice(index, 1)
    console.log(list)
    this.setState({
      list: list
    })
  }

  // 增加列表
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })
  }
}

export default Xiaojiejie