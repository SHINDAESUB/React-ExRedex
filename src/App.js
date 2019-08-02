import React,{Component} from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList'
import ControllerButtons from './components/ControllerButton'
import VisibleTodoList from './components/VisibleTodoList'

class App extends Component{
  render(){
    return(
      <div>
      <TodoInput/>
      <TodoList/>
      <ControllerButtons></ControllerButtons>
      <VisibleTodoList></VisibleTodoList>
      </div>
    )
  }

}

export default App;
