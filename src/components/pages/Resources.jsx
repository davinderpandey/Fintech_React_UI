import React, { useState, useEffect } from 'react'
function Resources() {
  const [users, setUsers] = useState([]);

useEffect(() => {
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    setUsers(users);
  }
}, []);



  return (
    <>
      <div className='bg-sky-200 max-w-[1240px] md:grid grid-cols-1 mx-auto py-[50px] pt-[35px] w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
        <div className='ml-[20%] mr-[20%]'>
        <header className='text-xl md:text-3xl md:p-[20px] text-center text-gray-900'>
                        <h1>Users </h1>
                    </header>
          <ul className='divide-y divide-gray-100'>
            {
              users.map((user,)=>{

             
            return <li className='flex justify-between gap-x-6 py-5'>
              <div className='flex min-w-0 gap-x-4'>
                <img
                  className='h-12 w-12 flex-none rounded-full bg-gray-50'
                  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                  alt=''
                />
                <div className='min-w-0 flex-auto'>
                  <p className='text-sm font-semibold leading-6 text-gray-900'>
                  {user.firstName} {user.lastName}
                  </p>
                  <p className='mt-1 truncate text-xs leading-5 text-gray-500'>
                  {user.email}
                  </p>
                </div>
              </div>
              <div className='hidden shrink-0 sm:flex sm:flex-col sm:items-end'>
                <p className='text-sm leading-6 text-gray-900'>
                  Co-Founder / CEO
                </p>
                <p className='mt-1 text-xs leading-5 text-gray-500'>
                  Last seen <time datetime='2023-01-23T13:23Z'>3h ago</time>
                </p>
              </div>
            </li>
               
              })}
          </ul>
        </div>
      </div>
    </>
  )
}
export default Resources
