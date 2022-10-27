import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name, id} = courseDetail[0];
    return (
        <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <div ref={ref}>
            <h2>Course Name: {name}</h2>
        </div>
        <Link to={`/courses/course/${id}`}><Button>Get Premium Access</Button></Link>
        </div>
    );
};

export default CourseDetails;