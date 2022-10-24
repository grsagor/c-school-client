import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({course}) => {
    return (
        <div>
            <Link>{course.name}</Link>
        </div>
    );
};

export default Courses;