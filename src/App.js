import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState(' ')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
   
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) =>setToDo(e.target.value)} type="text"  placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        { toDos.map((value) =>{

        return((!value.status && <div className="todo">
          <div className="left">
            <input
            onChange={(e) =>{
              setToDos(toDos.filter (val2 =>{
              if(val2.id ===value.id){
                val2.status = e.target.checked
              } 
              return val2
              }))}} 
            value={value.status}
            className = "ongoing"
            type="checkbox" name="" id="" />
            <p className='todo-ongoing'>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>))
  })}
  {/* <h2>Completed tasks</h2> */}
  
  {toDos.map((value) =>{
    if(value.status){
      return(
        <div className="todo ">
        <div className="left">
        <input
            onChange={(e) =>{
              setToDos(toDos.filter (val2 =>{
              if(val2.id ===value.id){
                val2.status = e.target.checked
              } 
              return val2
              }))}} 
            value={value.status}
            className = "ongoing"
            checked 
            type="checkbox" name="" id="" />
          <s style={{color: "grey"}}><p className='todo-completed'>{value.text}</p></s>
        </div>
        <div className="right">
          <i className="fas fa-times"></i>
        </div>
      </div>)
    }
  }
  )
}
      </div> 
    </div>
  );
}

export default App;