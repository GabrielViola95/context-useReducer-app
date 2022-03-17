import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {GlobalContext} from '../context/GlobalContex';

const TaskList = () => {

  const {tasks, deleteTask} = useContext(GlobalContext)
  // console.log(context)

  return (
    <div className='flex justify-center'>
      {/* <button onClick={()=> deleteTask()}>Delete All</button> */}
        <div className="w-6/12">
        {tasks.map(task => (
          <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between' key={task.id}>
            <div>
            <h1>{task.title}</h1>
            <h6>{task.id}</h6>
            </div>
            <div>
              <Link to={`/edit/${task.id}`} className='bg-green-600 hover:bg-green-500 py-2 px-4 mr-2'>Edit</Link>
              <button className='bg-red-600 hover:bg-red-500 py-2 px-4 mr-2'
              onClick={() => deleteTask(task.id)}
              >Delete</button>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default TaskList