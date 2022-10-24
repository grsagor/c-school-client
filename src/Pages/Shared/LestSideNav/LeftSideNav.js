import React, { useEffect, useState } from 'react';
import Courses from '../../Courses/Courses';

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
                courses.map(course => <Courses
                    key = {course.id}
                    course = {course}
                ></Courses>)
            }
        </div>
    );
};

export default LeftSideNav;