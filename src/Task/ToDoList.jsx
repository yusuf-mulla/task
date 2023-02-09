import { Button } from "@mui/material";
import React, { useState } from "react";
import "./ToDoList.css";

export const ToDoList = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = () => {
    if (text.trim() != "") {
      setData([...data, text]);
    }
    setText("");
  };
  const handleDelete = (item) => {
    const deleteData = data.filter((ele) => ele != item);
    setData(deleteData);
  };
  return (
    <div className="box">
        <h1> It's a To Do List</h1>
      <input id="a" onChange={(e) => setText(e.target.value)} value={text} />
      <span> </span>
<div className="s">
      <Button
        variant="contained"
        color="success"
        onClick={handleSubmit}
        className="b1"
      >
        {" "}
        Add
      </Button>
      </div>
      <ul>
        {data.map((item) => {
          return (
            <li onClick={() => handleDelete(item)}>
              {item} <span> </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
