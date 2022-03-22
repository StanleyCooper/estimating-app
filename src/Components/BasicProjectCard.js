import React from 'react'
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'

export default function BasicProjectCard() {
  return (
    <Draggable>
      <div>
        <div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Project Name!</h5>
            <p class='font-normal text-gray-700 dark:text-gray-400'>Here is basic information about the project! Wow, isn't this cool? Need to make this scalable from read information from the database!!</p>
            <Link to="/Project">
              <button 
                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Details
              </button>
            </Link>
        </div>
      </div>
    </Draggable>
  )
}
