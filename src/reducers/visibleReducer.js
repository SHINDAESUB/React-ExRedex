const setVisible =(state = 'ALL' , action) =>{ // 발생한 모든 Action은 모든 Reducer 에게 발송되기 때문에 파라미터로 전달된 action 중에 type 속성값이 SET_VISIBLE 일 경우에만 데이터 변경
  if (action.type === 'SET_VISIBLE'){
    console.log("SET_VISIBLE")
    return action.flag
  }
  return state

}

export default setVisible
