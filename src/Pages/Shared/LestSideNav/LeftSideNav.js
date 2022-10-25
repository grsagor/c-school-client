import React, { useEffect, useState } from 'react';
import Course from '../../Course/Course';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/courses')
        .then( res => res.json())
        .then( data => setCourses(data))
    }, [])

    console.log(courses);
    return (
        <div>
            <h2>This is left side</h2>
            {
                courses.map(course => <Course
                    key = {course.id}
                    course = {course}
                ></Course>)
            }
        </div>
    );
};

export default LeftSideNav;