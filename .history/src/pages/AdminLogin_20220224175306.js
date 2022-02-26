import React, { useState } from "react";
import chlogo from "../assets/ch.svg";
import { useNavigate} from 'react-router-dom'
const AdminLogin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const navigate=useNavigate()
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState({ ...state, [id]: value });
  };
  const handleSubmit=()=>{
    navigate({to:'/admin'})
  }
  return (
    <div className="w-screen h-screen flex justify-center items-center p-6 bg-gray-900">
      <form className="w-full md:w-96 shadow-lg h-auto p-7 rounded rounded-lg bg-gray-700" >
        <div className="mb-6">
          <img className="h-8 w-auto" src={chlogo} alt="" />
        </div>
        <h2 className="text-white text-lg mb-6 font-bold">
            Login as an Admin
        </h2>
        <label class="block">
          <span class="block text-md font-medium text-slate-400 ">
            Username
          </span>
          <input
            type="text"
            id="username"
            value={state.username}
            onChange={handleChange}
            class="mt-1 block w-full px-3 py-3 bg-gray-600  mb-4  rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
        </label>
        <label class="block">
          <span class="block text-md font-medium text-slate-400  ">
            Password
          </span>
          <input
            id="password"
            type="password"
            value={state.password}
            onChange={handleChange}
            class="mt-1 block w-full px-3 py-3 bg-gray-600  mb-10  rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
        </label>
        <button className="block w-full px-5 py-3 text-center font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
