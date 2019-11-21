import React, {Component} from 'react'

import { useDrag} from 'react-dnd'

const style = {
  cursor: 'move',
  
}


const Name = ({ id,name, location, updateName }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { name, type: 'NAME' },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      if (item && dropResult) {

        updateName({id:id,location:dropResult.slotid})
        // alert(`You dropped ${item.name} into ${dropResult.slotid}!`)
      }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })
  const opacity = isDragging ? 0.4 : 1
  const cursor = (location=='') ? 'move' : ''
  return (
    <span ref={(location=='') ? drag : null} style={{ cursor, opacity }}>
      {name}
    </span>
  )
}

export default Name;
