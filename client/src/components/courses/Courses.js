import React from 'react'
import CourseCat from '../coursecat/CourseCat'
import './Courses.css'
function Courses({courses}) {
    return (
        <div className="c">
            {courses.map((c)=>(
                <CourseCat course={c}/>
            ))}
            
        </div>
    )
}

export default Courses