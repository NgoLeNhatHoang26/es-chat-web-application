import React from "react"; 
import './ToDoList.css'
import { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(() => {
        const existedTasks = localStorage.getItem('tasks');
        if (existedTasks) {
            return JSON.parse(existedTasks);
        } else {
            return [];
        }
    })
    
    const [task, setTask] = useState('')
    const handleChange = (e) => {
        setTask(e.target.value);
    }
    const handleAddTask = () => {
        setTasks(prev => {
            const newTasks = [...prev, task]

            const jsonTask = JSON.stringify(newTasks)
            localStorage.setItem('tasks',jsonTask)

            return newTasks
        })
        setTask('')
    }
    const handleOldestTask = () => {
 
        const oldestTask = tasks[0];
        const newTasks = tasks.filter(task => task !== oldestTask)

        const jsonTask = JSON.stringify(newTasks)
        localStorage.setItem('tasks',jsonTask)

        return setTasks(newTasks);
        
    }
    const [selected, setSelected] = useState([]);
    const handleSelected = (id) => {
        setSelected(prev => {
            const isSelected = prev.includes(id);
            if (isSelected) {
                return prev.filter(task => task !== id)
            } else {
                return [...prev, id]
            }
        })
    }
    function deleteSelected () {
        const newTasks = tasks.filter((task) => !selected.includes(task))
        const jsonTask = JSON.stringify(newTasks)
        localStorage.setItem('tasks', jsonTask);

        return setTasks(newTasks);
    }
    function deleteAllTask () {
        setTasks([]);
        localStorage.removeItem('tasks');
    }
    function TitleBox({content})
    {
        return (
            <div>
                <h1>Nội dung phần tiếp theo</h1>
                {content}
            </div>
        )
    }
    return (
        <div>
            
            <TitleBox content={<h2>To-do List đơn giản</h2>} />

            <div className="toDoList">
                <h1 className="header">To-do List</h1>
                <input id="nhapTask" value={task} onChange={handleChange} placeholder="Nhập task"/>
                <button className="addButton" onClick={handleAddTask}>Thêm</button>
                <button className="clearButton" onClick={deleteSelected}>Đã xong</button>
                <button className="clearButton" onClick={deleteAllTask}>Xong tất cả</button>
                <div className="taskList">
                    {tasks.map((task,index) => (
                        <div key={index} className="task">
                            <input
                                type="checkbox"
                                id={task}
                                value={task}
                                checked= {selected.includes(task)}
                                onChange={()=> handleSelected(task)}
                            />
                            <label htmlFor={task} className="taskLabel">{task}</label>
                        </div>

                    ))}
                </div>
            </div>
        </div>

    )
}

export default ToDoList;