import React from 'react'
import {useHostels} from '../contexts/HostelContext'
const AdminHostelsView = () => {
  const {hostels}=useHostels()
  return (
    <div className='w-full h-full p-10'>
      <button className="px-3 py-2 text-white bg-indigo-700 rounded rounded">
        Add Hostel
      </button>
      <h1 className="md:text-3xl md:font-extrabold text-gray-800 py-6">
        Hostels
      </h1>
      
      </div>
  )
}

export default AdminHostelsView