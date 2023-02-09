import { Button } from '@mui/material'
import React,{useState} from 'react'

export const Counter2=()=>{
    const [value,setValue]=useState(0)
 
    const increase=()=>{
        setValue(count=> count +1)
    }
    const decrease=()=>{
        setValue(count=> count -1)
    }
    const reset=()=>{
        setValue(0)
    }

    return(
        <div>
        <h1> This is the COUNTER</h1>
            <Button variant='contained' color='success' onClick={increase} >+</Button>
            <h3> Counter : {value}</h3>
            <Button variant='contained' color='error' onClick={decrease}>-</Button> <br /> <br />
            <Button variant='outlined' color='error' onClick={reset} >Reset</Button>

        </div>
    )
}