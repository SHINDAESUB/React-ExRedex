import React,{Component} from 'react'
import {connect} from 'react-redux'

class ControllerButtons extends Component{

  clickHandler =(flag) =>{

    this.props.dispatch({type:'SET_VISIBLE', flag:flag})
  }
  render(){
    return(
      <div>
        <button onClick={() =>this.clickHandler('ALL')}>ALL</button>
        <button onClick={() =>this.clickHandler('ACTIVE')}>ACTIVE</button>
        <button onClick={() =>this.clickHandler('INACTIVE')}>INACTIVE</button>
      </div>
    )
  }

}



export default connect()(ControllerButtons)
