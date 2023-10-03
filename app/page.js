"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const [mainTask, setmainTask] = useState([])
  

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}])
    setdesc("")
    settitle("")


  };
  const deleteHandler =(i) =>{

    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }
  let renderTask = <h2> No task avalible</h2>
  if(mainTask.length > 0){
    renderTask = mainTask.map((t,i) =>{
      return( <li key={i} className="flex items-center justify-between ">
        <div className=" flex items-center justify-between  w-2/3">
        <h5 className="text-2xl font-semibold">{t.title}</h5>
        <h6 className="text-xl font-medium">{t.desc}</h6>
        <button onClick={()=>{
          deleteHandler(i)
        }} className="p-3 bg-red-500 text-white text-bold mb-4 rounded">Delete</button>
      </div>
      </li>
      );
    });
  }

  
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Rahul's todoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 py-2 "
          placeholder="Enter Task here.."
          value={title}
          onChange={(e) =>{
           settitle(e.target.value)
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-8 py-2"
          placeholder="Enter Description  here.."
          value={desc}
          onChange={(e) =>{
           setdesc(e.target.value)
          }}
        />

        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5"
        
        >
          Add Task
        </button>
      </form>
      <hr/>
      <div className="p-8 bg-slate-200">
        <ul>
          {renderTask}
        </ul>
      </div>
      
    </>
  );
};

export default page;
