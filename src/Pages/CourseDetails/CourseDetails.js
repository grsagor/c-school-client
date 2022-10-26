import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    // console.log(courseDetail);
    const {name} = courseDetail[0];
    return (
        <div>
            <h2>Course Name: {name}</h2>
        </div>
    );
};

export default CourseDetails;