import React, { useEffect, useState } from 'react'
import'./Courses.css'
import axios from "axios"
import Course from '../../components/course/Course'
import Categories from '../../components/categories/Categories'
import List from '../../components/list/List'
function Courses({categories}) {
    const [lists, setLists] = useState([])
   

  useEffect(() => {
    const getrandomLists = async () => {
      const res = await axios.get(`lists${categories ? "?categories=" + categories : ""}`,
      {
        headers: {
          token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmOWJjNjRlMzkyZjIwMTA0YmY5MTEiLCJpYXQiOjE2Mjk0NjkyMTZ9.5GFLKQXNiznhlDCbTrj53P_qXLBEoFOnDWzPRmvHwHc"
        },
      }
      );
      //console.log(res)
      setLists(res.data);
    };
    getrandomLists();
  }, []);
    return (
        <div className="homescreen">
               <Categories/>

         {lists.map((list) => (
        <List list={list} />
      ))}

            
        </div>
    )
}

export default Courses