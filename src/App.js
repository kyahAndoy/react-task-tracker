import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
  },
  {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
  },
  {
      id: 3,
      text: 'Food shopping',
      day: 'Feb 5th at 2:30pm',
      reminder: false,
  },
  ])

  //Add Task
  const addTask = (task) => {
    let id = 4;
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
    id = id + 1

  }

  //Delete Task
  const onDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {...task, reminder: !task.reminder} :  task)
    )
   }

  return (
    <div className='container'>
      <Header title='Task Tracker' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
      
      {tasks.length > 0 ? <Tasks
        tasks={tasks}
        onDelete={onDelete}
        onToggle={toggleReminder}
      /> : 'No Task Today'}
    </div>
  );
}

export default App;
