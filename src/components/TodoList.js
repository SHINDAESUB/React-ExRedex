import React,{Component} from 'react'
import {connect} from 'react-redux'
import Todo from "./Todo"

import {toggleTodo} from '../actions'

class TodoList extends Component {

    checkTodo =(index) =>{
      this.props.dispatch(toggleTodo(index))
    }

    render(){
      const todoTag = this.props.list.map (
        (todo,index)  =><Todo key={index}{...todo} onClick={()=>this.checkTodo(index)}/>)

        return(
          <ul>
            {todoTag}
          </ul>
        )
    }
}

const mapStateToProps =(state) =>{  //mapStateToProps :현재의 Redux 상의 Store 정보(State)를 컴포넌트 전달
  return state.todo
}

export default connect(mapStateToProps)(TodoList)
