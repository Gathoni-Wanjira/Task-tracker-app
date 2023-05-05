// We are styling the individual task from the tasks component.
// We are also importing react icons and add it to the h3 tag as a component
import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {
    return (
        <React.Fragment>
            <div className={`task ${task.reminder ? "reminder" : " "}`} onDoubleClick={ () => onToggle(task.id)}>
                <h3>
                    {task.text} <FaTimes style={{ color: "red", cursor: "pointer" }}
                        onClick={() => onDelete(task.id)}  />
                </h3>
                <p>{task.day}</p>
            </div>
        </React.Fragment>
    )
}

export default Task
