import React, { useEffect, useState } from 'react'
import './coursepage.css'
import {useLocation} from "react-router-dom"
import axios from "axios"

function CoursePage() {
    const location= useLocation();
   const path=location.pathname.split("/")[2];
   const [course,setCourse]= useState({})
   useEffect(()=>{
       const getsingleCourse= async ()=>{
           const res = await axios.get("/courses/find/" + path,{
           headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmOWJjNjRlMzkyZjIwMTA0YmY5MTEiLCJpYXQiOjE2Mjk0NjkyMTZ9.5GFLKQXNiznhlDCbTrj53P_qXLBEoFOnDWzPRmvHwHc"
          },
        })
           setCourse(res.data)
       };
       getsingleCourse()
   },[path]);

    return (
        <div className="singleCourse">
            <div className="singleCouresWrapper">
                <img 
                src="https://www.apsf.org/wp-content/uploads/newsletters/2020/3502/coronavirus-covid-19.png"
                alt=""
                className="singleCourseImg"/>
                <h1 className="singleCourseTitle">
                    {course.title}
                </h1>
                <p className="singleCourseDesc">
                {course.body}
                </p>
            </div>

        </div>
    )
}

export default CoursePage