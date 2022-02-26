import React, { useState } from "react";

const AdminLogin = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e) => {
    const { value, id } = e.target;
    setState({ ...state, [id]: value });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Email</span>
          <input
            type="email"
            placeholder="Enter email"
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
          <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-slate-700">Password</span>
          <input
            id="password"
            type="password"
            value={state.password}
            onChange={handleChange}
            class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 "
          />
        </label>
      </form>
    </div>
  );
};

export default AdminLogin;
