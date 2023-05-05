// We are styling the individual task from the tasks component.
import React from 'react'

const Task = ({ task }) => {
  return (
    <React.Fragment>
        <div className='task'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    </React.Fragment>
  )
}

export default Task
