import React from 'react'

const tasks = [
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

const Tasks = () => {
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
