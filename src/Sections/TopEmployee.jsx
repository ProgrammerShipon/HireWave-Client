import React, { useState, useEffect } from "react";
import Employee from "../Components/Employee";

export default function TopEmployee() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("./employee.json")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className=" container py-10">
      <div className="title text-center py-5">
        <h1 className="text-5xl font-bold">top employ to hire</h1>
      </div>
      <div className=" grid grid-cols-[repeat(auto-fit,minmax(350px,max-content))] gap-5 justify-center">
        {user.map((employ) => (
          <Employee key={employ.id} employ={employ}></Employee>
        ))}
      </div>
    </section>
  );
}
