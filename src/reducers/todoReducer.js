const todos = (state ={list: []}, action) =>{

  switch(action.type){

    case 'ADD_TODO':

      console.log("ADD_TODO ...." +action)

      const newList = [...state.list,{text:action.text,completed:false}]

      state=Object.assign({},state,{list:newList})  //Object.assign 두개의 객체를 하나로 합침

      break

    case 'TOGGLE_TODO':

       const toggleList = state.list.map((todo, index) =>  index === action.index ? {...todo, completed : !todo.completed} : todo)

       state=Object.assign({},state,{list:toggleList})

       break

      default :

        return state

  }
  //잘못되어도 기존상태 유지
  return state
}

export default todos
