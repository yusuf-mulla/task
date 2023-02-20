import { Card, CardContent, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";


export const Home = () => {
  const select=useSelector((state)=>state)
  const dispatch=useDispatch()

  const [data, setData] = useState([]);

  const getCartData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");


    // setData([data]);
    console.log(data);
  };

  useEffect(()=>{
    setData(getCartData)
  },[])
  return (
    <div>
      <Grid container spacing={3}>
      {data.map((item, index) => {
        return (
          <Grid item xs={3} >
            <Card >
              <CardContent >
                <h1>{item.image}
                  width={200}
                  height={200}
                  style={{ position: "relative", left: 50 }}
                  </h1>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
      </Grid>
    </div>
  );
};
