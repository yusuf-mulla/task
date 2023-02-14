import React, { useEffect, useState } from "react"

export const Counter5=()=>{

const [counter, setCounter] = useState(0);


  
  useEffect(()=>{
      setTimeout(()=>{
          setCounter(counter+1)
      },1000)
      })
  
    return(
        <div>
            <h1>Counter without button</h1>
                  <h1>{counter}</h1>

        </div>
    )
}