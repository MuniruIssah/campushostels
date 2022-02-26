import React from 'react'
import {useHostels} from '../contexts/HostelContext'
const AdminHostelsView = () => {
  const {hostels}=useHostels()
  return (
    <div className='w-full h-full'>
      button.py
      <h1 className="md:text-3xl md:font-extrabold text-gray-800 py-6 px-10">
        Hostels
      </h1>
      
      </div>
  )
}

export default AdminHostelsView