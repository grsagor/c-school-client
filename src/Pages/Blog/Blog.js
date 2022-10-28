import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div className='m-2'>
                <h3>What is <span className='text-danger'>CORS</span>?</h3>
                <ul>
                    <li>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</li>
                </ul>
            </div>
            <div className='m-2'>
                <h3>Why are you using <span className='text-danger'>firebase</span>? What other options do you have to implement authentication?</h3>
                <li>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</li>
                <li>
                    <span className='fw-bold'>Alternative options of authentication:</span>
                    <ul>
                        <li className='text-danger'>MongoDB</li>
                        <li className='text-danger'>Auth0</li>
                        <li className='text-danger'>Passport</li>
                        <li className='text-danger'>Okta</li>
                        <li className='text-danger'>JSON Web Token</li>
                        <li className='text-danger'>Keycloak</li>
                        <li className='text-danger'>Amazon Cognito</li>
                    </ul>
                </li>
            </div>
            <div className='m-2'>
                <h3>How does the <span className='text-danger'>private route work</span>?</h3>
                <ul>
                    <li>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.</li>
                    <li>If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</li>
                </ul>
            </div>
            <div className='m-2'>
                <h3>What is <span className='text-danger'>Node</span>? How does <span className='text-danger'>Node</span> work?</h3>
                <ul>
                    <li>Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests.</li>
                    <li>In other words, Node.js wastes no time or resources on waiting for I/O requests to return.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;