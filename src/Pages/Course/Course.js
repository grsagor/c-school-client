import React from 'react';
import { Link } from 'react-router-dom';


const Course = ({course}) => {
    return (
        <li className='m-1'>
            <Link className='text-reset' to={`/courses/${course.name}`}>{course.name}</Link>
        </li>
    );
};

export default Course;