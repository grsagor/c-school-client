import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../Shared/LestSideNav/LeftSideNav';

const Courses = ({course}) => {
    return (
        <div className='mt-4'>
            <Container>
            <Row className='gap-4'>
                <Col className='d-none d-lg-block border border-dark'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='border border-dark'>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;