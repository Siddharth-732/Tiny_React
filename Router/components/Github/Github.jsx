import React, { useEffect, useState } from "react";

export function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/Siddharth-732")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
      <>
      <div className="flex ">
        <img src={data.avatar_url} alt="Git pic"  width={300}/>
      <div className=" flex-col items-center bg-gray-500 text-amber-50 text-3xl p-2">
            <div>Name : {data.name} </div>
            <br />
            <div>Location : {data.location} </div><br />
            <div>Bio : {data.bio} </div>
      </div>
      </div>
    </>
)
}
