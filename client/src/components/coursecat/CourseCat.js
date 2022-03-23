import React from 'react'
import { Link } from 'react-router-dom';
import Categories2 from '../categories/Categories2';

function CourseCat({ course }) {

  return (
       <>
      

      <Link to={`/course/${course._id}`} className="link">
        <div className="card"
        >
         
          <img className="courseimg"
            src={course.photo}
            alt="" />
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
      
  </>
  )
}

export default CourseCat