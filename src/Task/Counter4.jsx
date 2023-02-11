import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Counter4.css";

export const Counter4 = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    if (count <= 9) {
      setCount(count + 1);
    } else if (count <= 19) {
      setCount(count + 10);
    } else {
      setCount(count * 2);
    }
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <div>
      <div className="a">
        <h1 className="heading2">Counter Application</h1>
        <br /> <br />
        <Button
          variant="contained"
          color="success"
          onClick={handleInc}
          className="bt12"
        >
          Increment
        </Button>{" "}
        <h1 className={count > 0 ? "positive" : count <= 0 ? "negative" : null}>
          {count}
        </h1>
        <span> </span>
        <Button
          variant="contained"
          color="error" disabled = {count == 0}
          onClick={handleDec}
          className="bt22"
        >
          Decrement
        </Button>{" "}
        <br /> <br />
        <Button
          variant="outlined"
          count
          onClick={() => setCount(0)}
          disabled={count == 0}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};
