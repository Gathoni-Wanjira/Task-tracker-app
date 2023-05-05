// Import the component to the app
import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';



const App = () => {
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


  // Delete task function

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  return (
    // You can only have one main parent element.
    <div className="container">
      < Header />
      < Tasks tasks={tasks} onDelete={deleteTask} />
    </div>

  )
}

export default App;
