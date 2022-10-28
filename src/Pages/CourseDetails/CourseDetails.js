import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload } from 'react-icons/fa';
import Description from '../Description/Description';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ref = React.createRef();

const CourseDetails = () => {
    const courseDetail = useLoaderData();
    const {name, id, header, descriptions, picture } = courseDetail[0];
    console.log(picture);
    return (
        <div className='p-3'>
            <div className='d-flex justify-content-between align-items-center'>
                <div>
                    <h2 className='m-2 p-2'>{header}</h2>
                </div>
                <div>

                <OverlayTrigger
                      key={'bottom'}
                      placement={'bottom'}
                      overlay={
                        <Tooltip id={`tooltip-${'bottom'}`}>Click Here To Download THe Whole Details</Tooltip>
                      }
                    >

                      <Button className='bg-transparent border border-0 p-0'><Pdf targetRef={ref} filename={`C_Programming_${name}_details.pdf`}>
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                    </Pdf></Button>
                    </OverlayTrigger>


                    {/* <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => <button onClick={toPdf}><FaDownload></FaDownload></button>}
                    </Pdf> */}
                </div>
            </div>
            <div ref={ref}>
                <h2 className='m-2 p-2 d-none'>{header}</h2>
                <div className='m-2 p-2'>
                    {
                        descriptions?.map(description => <Description
                            description={description}
                        ></Description>)
                    }
                </div>
                <div className='m-2 p-2'>
                    <h4>Here Is The Syntax In Picture:</h4>
                    <img className='border border-dark img-fluid' src={picture} alt="" />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className='mb-2 p-auto'><Link to={`/courses/course/${id}`}>
                    <Button variant='dark'>Get Premium Access</Button></Link>
                </div>
            </div>

        </div>
    );
};

export default CourseDetails;