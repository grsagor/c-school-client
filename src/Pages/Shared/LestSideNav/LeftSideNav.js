import React, { useEffect, useState } from 'react';
import Course from '../../Course/Course';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    }, [])

    return (
        <div>
            <h2>Tutorial Lists</h2>
           <ul>
           {
                courses.map(course => <Course
                    key = {course.id}
                    course = {course}
                ></Course>)
            }
           </ul>
        </div>
    );
};

export default LeftSideNav;