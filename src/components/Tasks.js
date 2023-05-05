import React from 'react'
import { useState } from 'react'

// State is a built in object that represents the state of a component.
// You can define and update react state using useState hook.
// useState is a function that takes the initial state value as its argument and returns 2 value elements.... a)The initial state.... b) a function that can be used to update the initial state value.
// State is immutable You cannot directly change it 

const Tasks = () => {
  const [tasks, setTasks] = useState (
    [
      {
        id : 1,
        text: "Doctors Appointment",
        day: "5th feb  at 2:30pm",
        reminder: true,
      },
      {
        id : 2,
        text: "Load the dryer",
        day: "5th feb  at 1:30pm",
        reminder: false,
      },
      {
        id : 3,
        text: "Cook lasagna",
        day: "5th feb  at 11:30am",
        reminder: true,
      },
      {
        id : 4,
        text: "Grocery Shopping",
        day: "5th feb  at 8:30am",
        reminder: false,
      }
    ]
  )


  return (
    // We are going to map the array inside the tags
    <React.Fragment>
    <>
       {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
    </>
    </React.Fragment>
  )
}

export default Tasks
