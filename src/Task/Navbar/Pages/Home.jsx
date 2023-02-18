import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { addQuantity } from './Utility';

export const Home = () => {
  const [data,setData]=useState([]);


const addData= async ()=>{
  const getData= axios.get("https://fakestoreapi.com/products")
  setData(getData.data)
  console.log(getData);
}

return (
  <div>
      {data.map((item,index)=>{
        return(
          <h1>{data}</h1>
        )
      })}
      
    </div>
  )
}
