import { Button, TextField } from "@mui/material";
import React, { useState } from "react"
import "./ToDoList2.css"

export const ToDoList2=()=>{
  const [text,setText]=useState('');
  const [toDo,setToDo]=useState([]);
  const [copyToDo,setCopyToDo]=useState([]);
  const [selectedIndex,setSelectedIndex]=useState(null)
  const [edit,setEdit]=useState(false)

  const handleAddTask =()=>{
    if(edit){

    const editedTask=toDo.map((elem,index)=>index ===selectedIndex?text:elem)
    setToDo(editedTask);
    setCopyToDo(editedTask)
    setText('')
    setEdit(false)
    }else{
      if(!text.trim()) return
    setToDo([...toDo,text])
    setCopyToDo([...toDo,text])
    setText('')
  }}
const handleDeleteTask=(item,index)=>{
  const remainTask=toDo.filter((elem,ind)=>index !=ind)
  setToDo(remainTask)
}
const handleSearchTask=(value)=>{
  const searchItem = copyToDo.filter((elem)=>
  elem.toUpperCase().includes(value.toUpperCase()))
  setToDo(searchItem)
}
const handleEditTask=(item,ind)=>{
  setText(item)
  setSelectedIndex(ind)
  setEdit(true)
}
  return (
    <div className="bx">
      <h1> To DO LIST</h1>
      <TextField type="text" placeholder="Search here...."
      onChange={(e)=>handleSearchTask(e.target.value)}/>
      <TextField type="text" placeholder="Add To Do"
      value={text} 
      onChange={(e)=>setText(e.target.value)}/>{' '}
      <Button variant="contained" color="success" 
      onClick={()=>handleAddTask()}>{edit ? "Edit":"Add"} Task</Button>
      <ol>
       {toDo.map((item,index)=>{
        return(
          <li key={index} >{item} {' '}

          <Button color="error" onClick={()=>handleEditTask(item,index)}>Edit</Button>
          <Button color="error" onClick={()=>handleDeleteTask(item,index)} >Delete</Button>


          </li>
        )
       }) }
      </ol>
    </div>
  )
}