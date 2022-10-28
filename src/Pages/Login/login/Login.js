import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthCoontext } from '../../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGooglePlusG, FaGithubSquare } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { providerLogin } = useContext(AuthCoontext);

    let location = useLocation();

    let from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const handleGitHubSignIn = () => {
        providerLogin(githubProvider)
            .then(res => {
                console.log(res.user);
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    const { signIn } = useContext(AuthCoontext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <div className='text-center'>
                            <div className=''><Button variant="dark" type="submit">Submit</Button></div>
                            <div className=''><Form.Text className='text-danger'>{error}</Form.Text></div>
                            <div><Link to='/register' className='text-reset'>Please Register If You Don't Have An Account</Link></div>
                    </div>
                </Form>
            </div>
            <div className='text-center'>
                    <div className='m-2'><Button variant='dark' onClick={handleGoogleSignIn}><FaGooglePlusG size={30}></FaGooglePlusG> Log In Google</Button></div>
                    <div className='m-2'><Button variant='dark' onClick={handleGitHubSignIn}><FaGithubSquare size={30}></FaGithubSquare> Log In GitHub</Button></div>
            </div>
        </div>
    );
};

export default Login;