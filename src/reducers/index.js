import {combineReducers} from 'redux'  //combineReducers 여러개의 Reducer 들을 하나의 객체로 만들어 주는 역할

import todo from './todoReducer'
import setVisible from './visibleReducer'

const todoApp = combineReducers(
  {
    todo:todo,                 //todoReducer 의 실행 결괴
    visible:setVisible         //setVisible  의 실행 결과
  }
)

export default todoApp
