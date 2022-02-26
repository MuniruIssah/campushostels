import React from "react";

const Team = () => {
  return (
    <div className="bg-gray-900 flex flex-col items-center justify-center space-y-5 md:space-y-10 lg:p-20 p-10 w-screen">
      <h1 className="hidden md:block tracking-tight  font-extrabold text-3xl text-white sm:text-4xl md:text-5xl">
        Our Team
      </h1>
      <div className="md:flex md:justify-between md:items-center w-full">
        <div class="text-center">
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
          <p class="text-gray-500">Web designer</p>
        </div>
        <div class="text-center">
  <img
    src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
    class="rounded-full w-32 mb-4 mx-auto"
    alt="Avatar"
  />
  <h5 class="text-xl font-medium leading-tight mb-2">John Doe</h5>
  <p class="text-gray-500">Web designer</p>
</div>
      </div>
    </div>
  );
};

export default Team;
