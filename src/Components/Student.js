import React from 'react';
import { useParams } from 'react-router-dom';
import {students} from './Home'; 

export const Student =()=>{
   const params = useParams();
console.log(params.stuId);
const selectedStu = students.filter(value => value.Id==params.stuId);
console.log(selectedStu);
   return(
       <>
        <h1>
            This is my Student Page
            {selectedStu.map((value,index)=>{
                return(
                    <div key={index}>
                     {value.name}
                    </div>
                )
            })}
        </h1>
       </>
   )


}