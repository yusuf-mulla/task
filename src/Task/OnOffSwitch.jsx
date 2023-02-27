import React, { useState } from "react";
import { Button } from "@mui/material";
import "./OnOffSwitch.css";

export const OnOffSwitch = () => {
  const [on, setOn] = useState(false);
  const handleButton = () =>{
    // setTimeout(()=>{
      setOn(!on)
    // },2000)
  }


  return (
    <div className="dv">
        <h1 className="heading1"> ON & OFF Switch</h1>
      <img src={on ? "./on_Bulb1.jpg" : "./off_Bulb.jpg"} width={400} />
      <Button 
        variant="contained"
        color="success"
        style={{
          backgroundColor: on ? "green" : "red",
          color:"black",
        }}
        onClick={handleButton}
      >
        {on ? "ON" : "OFF"}
      </Button>
    </div>
  );
};
