"use client";
import React, { useState } from "react";
import Loading from "./loading";

const getdata = async () => {
  return (await fetch("https://jsonplaceholder.typicode.com/todos",{
    
  })).json();
};

const Cms = async () => {
  const [load, setLoad] = useState(0);

  const data = await getdata();
  console.log(data);
  return (
    <div>
      Cms
      {load ? <Loading></Loading> : <div>notloading</div>}
    </div>
  );
};

export default Cms;
