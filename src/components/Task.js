// We are styling the individual task from the tasks component.
// We are also importing react icons and add it to the h3 tag as a component
import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({ task }) => {
  return (
    <React.Fragment>
        <div className='task'>
            <h3>
                {task.text} <FaTimes style={{color: "red", cursor: "pointer"} }/>
                </h3>
            <p>{task.day}</p>
        </div>
    </React.Fragment>
  )
}

export default Task
