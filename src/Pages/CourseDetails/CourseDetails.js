import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name} = courseDetail[0];
    return (
        <div>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <div ref={ref}>
            <h2>Course Name: {name}</h2>
        </div>
        </div>
    );
};

export default CourseDetails;