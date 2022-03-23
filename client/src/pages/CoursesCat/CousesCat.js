import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Courses from '../../components/courses/Courses';
import Categories2 from '../../components/categories/Categories2'

function Coursescat() {
    const [courses, setCourses] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchCourses = async () => {
        const res = await axios.get("/courses/" + search);
        console.log(res)
        setCourses(res.data);
      };
      fetchCourses();
    }, [search]);
    return (
        <div>
          <Categories2/>
            <Courses courses={courses}/>
        </div>
    )
}

export default Coursescat