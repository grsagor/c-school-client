import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()[0];
    console.log(course);
    return (
        <div>
            <h2>The content you have clicked is: {course.name}</h2>
        </div>
    );
};

export default Checkout;