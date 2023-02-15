import { Button } from "@mui/material";
import React, {useState} from "react";

export const Counter3 = () => {
  const [value, setValue] = useState(0);

  const handleClick = (val) => {
    setValue(value + val);
  };
  const reset = (val) => {
    setValue(0);
  };
  return (
    <div>
      <h1> This is the COUNTER</h1>
      <Button
        variant="contained"color="success"
        onClick={() => handleClick(+1)}>+</Button>

      <h3>{value}</h3>
      <Button variant="contained" color="error" 
      onClick={() => handleClick(-1)}>-</Button>{" "}

      <br /> <br />
      <Button variant="outlined" color="error" 
      onClick={() => reset(0)}>Reset</Button>
    </div>
  );
};
