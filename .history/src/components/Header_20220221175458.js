import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 h-6 shadow shadow-xl bg-slate-700">
        <h1 className="text-white text-2xl font-bold">
            Campus Hostels
        </h1>
        <div className="flex justify-start items-center space-x-2 bg-white"></div>
    </div>
  )
}

export default Header