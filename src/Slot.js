import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import todosFactory from './redux/todosFactory'
import { useDrag,DropTarget } from 'react-dnd'




const style = {
  cursor: 'move',
  
}
const Name = ({ name }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'NAME' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.slotid}!`)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  const border = isDragging ? 'none' : 'none'
  return (
    <span ref={drag} style={{ ...style, opacity, border }}>
      {name}
    </span>
  )
}


const slotStyle = {

}




class Slot extends Component{
	constructor(props){
		super(props)

    var names = [
        {
          id:1,
          name:'Peter',
          location:'holder1'
        },
        {
          id:2,
          name:'Paul',
          location:'duckie2'
        } 
      ] 

    var found = names.find(name => name.location == props.slotid);

    console.log(props.slotid)
    this.state = {
      name: found ? found : null
    }


	}



	render(){

    var {name} = this.state
    var { canDrop, isOver, connectDropTarget } = this.props

    const isActive = canDrop && isOver && (name==null)

    let border = 'thin purple solid'


    if (isActive) {
      border = 'thin green solid'
    } 
		return (
			<div class="name" ref={connectDropTarget} style={{ ...style, border }}>
        {name ? (<Name name={name.name}/>) : null}
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
