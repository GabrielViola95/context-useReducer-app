import React from 'react'
import { Link } from 'react-router-dom'
import {GrAdd} from 'react-icons/gr'

const Heading = () => {
  return (
    <div>
        <div className="flex item-center mb-10">
          <Link to='/'>
          <h5 className='text-gray-100 font-bold text-2x1'>TaskApp</h5>
          </Link>   
          <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to='/add'>
          <button className='bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-2 rounded inline-flex items-center'>
            <GrAdd/>
            Add Employee
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heading