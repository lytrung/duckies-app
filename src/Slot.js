import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import todosFactory from './redux/todosFactory'
import { DropTarget } from 'react-dnd'
import Name from './Name'



const slotStyle = {

}


class Slot extends Component{
	constructor(props){
		super(props)

    var names = props.list

  


	}



	render(){

    // var {name} = this.state
    var { canDrop, isOver, connectDropTarget } = this.props

    var found = this.props.list.find(name => name.location == this.props.slotid);

    const isActive = canDrop && isOver && (found==false)

    let border = ''


    if (isActive) {
      border = 'thin rgba(255, 85, 152,1) solid'
    } 
		return (
			<div class="name" ref={!found ? connectDropTarget : null } style={{ ...slotStyle, border }}>
        {found ? (<Name {...found} />) : null}
      </div>
		)
	}
}




// function mapDispatchToProps(dispatch){
//   return {
//     removeTodo: (id) => {
//       dispatch(todosFactory.remove(id))
//     }
//   }
// }

// export default connect(null,mapDispatchToProps)(Todo);


// export default Slot


export default DropTarget(
  'NAME',
  {
    drop: (props, monitor) => ({ name: 'Slot',slotid:props.slotid }),
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(Slot)
