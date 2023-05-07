// Import the component to the app
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';



const App = () => {
  const [showAddTask, setShowAddTask] = useState (
    false
  )
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: "Doctors Appointment",
        day: "1st feb  at 2:30pm",
        reminder: true,
      },
      {
        id: 2,
        text: "Load the dryer",
        day: "4th feb  at 1:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "Cook lasagna",
        day: "6th feb  at 11:30am",
        reminder: true,
      },
      {
        id: 4,
        text: "Grocery Shopping",
        day: "7th feb  at 8:30am",
        reminder: false,
      }
    ]
  )


  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task} 
    setTasks ([...tasks, newTask])

  }


  // Delete task function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder Function.
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? {
        ...task, reminder:
          !task.reminder
      } : task)
    )
  }



  return (
    // You can only have one main parent element.
    <div className="container">
      < Header />
      { showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? < Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
    </div>

  )
}

export default App;
