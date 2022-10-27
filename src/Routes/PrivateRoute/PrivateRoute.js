import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthCoontext } from '../../contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthCoontext);
    let location = useLocation();

    if(loading){
        return <Spinner animation='border' variant='primary'></Spinner>
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;