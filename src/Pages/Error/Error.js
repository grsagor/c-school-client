import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import './Error.css';

const Error = () => {
    return (
        <div className='error-css d-flex flex-column justify-content-center align-items-center'>
            <div className='text-danger fs-1'>Opps Sorry! This URL is not valid.</div>
            <div>
                <Link to='/'><button className=''>
                    <div className='d-flex align-items-center'>
                        <div>Go to home page</div>
                        <div className=''><FaRegArrowAltCircleRight></FaRegArrowAltCircleRight></div>
                    </div>
                </button></Link>
            </div>
        </div>
    );
};

export default Error;