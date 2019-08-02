export const addTodo = (text) =>{  //addTodo 는 Action에 해당 하는 객체를 생성하는 역할 만한다.
  return {
    type:'ADD_TODO',
    text: text
  }
}

export const toggleTodo = (index) =>{
  return{
    type:'TOGGLE_TODO',
    index: index
  }
}
