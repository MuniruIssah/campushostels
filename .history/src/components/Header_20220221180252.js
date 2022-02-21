import React from 'react'
import {  } from 'react-icons/ai';
const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 h-16 shadow shadow-xl bg-slate-700">
        <h1 className="text-white text-xl font-bold">
            Campus Hostels
        </h1>
        <div className="flex justify-start items-center space-x-2 bg-white/25 py-2 px-3 rounded rounded-lg">

            <input type="text" className="outline-none placeholder:text-white/50 bg-transparent" placeholder='Search for hostels' />
        </div>
    </div>
  )
}

export default Header