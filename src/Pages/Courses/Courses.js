import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';
// import CourseDetails from '../CourseDetails/CourseDetails';
import LeftSideNav from '../Shared/LestSideNav/LeftSideNav';

const Courses = ({course}) => {
    return (
        <div className='bg-secondary'>
            <Container>
            <Row>
                <Col className='d-none d-lg-block'>
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col>
                    <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;