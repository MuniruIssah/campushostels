import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 h-20 shadow shadow-xl bg-slate-700">
        <h1 className="text-white text-2xl font-bold">
            Campus Hostels
        </h1>
        <div className="flex justify-start items-center space-x-2 bg-white/50 ">
            <input type="text" className="outline-none" placeholder='Search for hostels' />
        </div>
    </div>
  )
}

export default Header