import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Course.css';
import {useState} from 'react'
import axios from 'axios';

function Course({ index, item }) {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get("/courses/find/" + item, {
          headers: {
            token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmOWJjNjRlMzkyZjIwMTA0YmY5MTEiLCJpYXQiOjE2Mjk0NjkyMTZ9.5GFLKQXNiznhlDCbTrj53P_qXLBEoFOnDWzPRmvHwHc"
          },
        });
        console.log(res)
        setCourse(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCourse();
  }, [item]);
  return (
    <Link to={`/course/${course._id}`} className="link">
    <div className="card" 
    >
      <img className="courseimg"
      src={course.photo}
      alt=""/>
      <div className="courseInfo">
        <div className="courseCats">
          <span className="courseCat">{course.categories}</span>
        </div>
        <span className="courseTitle">{course.title}</span>
            
      </div>
      <p className="courseDesc">
      {course.body}
      </p>
    </div>
    </Link>
  )
}

export default Course