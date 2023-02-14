import axios from 'axios'
import React, { useState } from 'react'
import { addQuantity } from './Utility';

export const Home = () => {
  const [data,setData]=useState([]);


const addData= async ()=>{
  const getData= axios.get("https://fakestoreapi.com/products")
  setData(addQuantity(getData.data))
}

  return (
    <div>
      
    </div>
  )
}
