import React from "react";
import { Link } from "react-router-dom";

export const Home =()=>{
const students = [
    {id:1, name :"Harshita"},
    {id:2, name :"janaki"},
    {id:3, name :"Lalsa"},
    {id:4, name :"manikumar"},
    {id:5, name :"Karthik"},
]


    return(
        <div>
            <h1>This is Home Page</h1>

            {students.map((value,index)=>{
                return(
                    <div key={index}>
                        {index+1}.
                        <Link to={`student/${value.id}`}>{value.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}