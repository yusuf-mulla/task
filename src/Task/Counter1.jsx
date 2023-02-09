import { Button } from '@mui/material'
import React,{useState} from 'react'

export const Counter1=()=>{
        const [value,setValue]=useState(0)

    return(
        <div>
<h1> This is the COUNTER</h1>
 <Button variant='contained' color='success' onClick={()=>setValue(value+1)} >+</Button>
            <h3> Counter : {value}</h3>
            <Button variant='contained' color='error' onClick={()=>setValue(value-1)}>-</Button> <br /> <br />
            <Button variant='outlined' color='error' onClick={()=>setValue(0)} >Reset</Button>
        </div>
    )
}