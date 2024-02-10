/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {

    const data = useLoaderData()
//     const [data, setData] = useState([])
//   useEffect(() => {
//     fetch('https://api.github.com/users/atulkashyap404')
//     .then(response => response.json())
//     .then(data =>{
//         console.log(data);
//         setData(data)
//     })
//   }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white text-2xl">
      Github Followers: {data.followers}
      <img className ="rounded-full m-4 px-6 py-4 " src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

// Fast refresh only works when a file only exports components. Use a new file to share constants or functions between components. 
export const githubInfoLoder = async ()=>{
   const response = await fetch('https://api.github.com/users/atulkashyap404')
    return response.json()
}
