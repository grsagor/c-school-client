import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const course = useLoaderData()[0];
    console.log(course);
    return (
        <div>
            <h2>You were visiting <span className='text-danger'>{course.name}</span></h2>
        </div>
    );
};

export default Checkout;