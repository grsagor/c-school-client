import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import './Home.css'
const Home = () => {
    return (
        <div style={{height: '100%'}} className='h-100 d-flex justify-content-center justify-items-center bg-image'>
            <div className='text-center'>
                <h1>Welcome to <span className='text-danger'>C School.</span></h1>
                <h3>This is the best platform to learn C programming.</h3>
                <h3>Visit and be the best C programmer.</h3>
                <h3 className=''>Best of luck <FaThumbsUp></FaThumbsUp></h3>
            </div>
        </div>
    );
};

export default Home;