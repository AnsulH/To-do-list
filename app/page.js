"use client"
import { usePathname } from 'next/navigation'
import React, { useCallback, useInsertionEffect, useState } from 'react'

function page() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])

  const submitde=(e)=>{
    e.preventDefault()//stop page from reloading
    setmaintask([...maintask,{title,desc}]);
    setdesc("")
    settitle("")
  }

  let rendertask=<h4>No Task Available</h4>
  if (maintask.length>0){
    rendertask= maintask.map((t,i)=>{
      return <li key={i} className='mb-1 flex justify-between items-center'>
                <div className='flex gap-5 justify-between justify-center m-1 w-2/3'>
                  <>{i+1}.</>
                  <h5>{t.title}</h5>
                  <h6>{t.desc}</h6>
                </div>
                <button onClick={()=>{
                  deletel(i)
                }} className='bg-red-400 py-1 px-4 rounded-lg text-lg font-bold '>Delete</button>
              </li>
  })}

  const deletel =(i)=>{
    let path=[...maintask]
    path.splice(i,1);
    setmaintask(path);
  }

  return (
    <>
    <h1 className='bg-purple-500 text-white p-7 text-center text-4xl font-bold font-serif drop-shadow-2xl'>PoLo's To Do List</h1>
    <br/>
    <form onSubmit={submitde} className='text-center'>
      <input type='text' 
        className='p-3 px-10 m-5 border-4 text-center' 
        placeholder='Enter Task Here'
        value={title}//two way binding
        onChange={(e)=>{
          settitle(e.target.value)
        }}
      />
      
      <input type='text' 
        className='p-3 px-10 m-5 border-4 text-center' 
        placeholder='Enter Description Here'
        value={desc}
        onChange={(w)=>{
          setdesc(w.target.value)
        }}/>
      
      <button className='px-7 py-3 text-white font-bold bg-gray-600 rounded-lg'>ADD</button>
    </form>
    <br/>
    <div className='bg-gray-400 text-white text-2xl text-center p-3 mx-40 rounded-lg border-gray-500 border-4' >
        <ul>
        {rendertask}
        </ul>
    </div>
    </>
  )
}

export default page