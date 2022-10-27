import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../Shared/LestSideNav/LeftSideNav';

const Courses = ({course}) => {
    return (
        <div className='m-4'>
            <Container>
            <Row className=''>
                <Col className='d-none d-lg-block border border-dark col-4 text-white-50 bg-dark'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='border border-dark col-8 d-flex justify-content-center flex-column align-items-center'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;