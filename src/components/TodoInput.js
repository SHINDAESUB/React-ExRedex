import React,{Component} from 'react'
import {addTodo} from '../actions'
import {connect} from 'react-redux'  //store 와 연결 되야하므로  mapStateToProps

class TodoInput extends Component{

  clickHandler  =(e) =>{         // reducers/index.js  > reducers/todoReducer.js 전달

      const input = this.input
      this.props.dispatch(addTodo(input.value))  //addTodo === Action

      input.value=''
  }

  render(){
      return(
        <div>
          <input type="text" ref={(ref) => this.input = ref}></input>
          <button onClick={this.clickHandler}> Click</button>
        </div>
      )
  }
}

export default connect()(TodoInput)
