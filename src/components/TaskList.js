import React, { useContext } from 'react';
import {globalContext} from '../context/globalContex';

const TaskList = () => {

  const {tasks} = useContext(globalContext)
  // console.log(context)

  return (
    <div className='flex justify-center'>
        {tasks.map(task => (
          <div className='bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between'>
            <h1>{task.title}</h1>
            <h6>{task.id}</h6>
          </div>
        ))}
    </div>
  )
}

export default TaskList