import React from 'react'
import Task from './Task'


// State is a built in object that represents the state of a component.
// You can define and update react state using useState hook.
// useState is a function that takes the initial state value as its argument and returns 2 value elements.... a)The initial state.... b) a function that can be used to update the initial state value.
// State is immutable You cannot directly change it 

const Tasks = ({ tasks }) => {
  return (
    // We are going to map the array inside the tags
    
    <React.Fragment>
       {tasks.map((task) =>(
       <Task key={task.id} task = {task} />
        ))}
    </React.Fragment>
    
  )
}

export default Tasks
