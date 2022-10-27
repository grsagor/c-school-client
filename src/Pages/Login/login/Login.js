import { GoogleAuthProvider, GithubAuthProvider  } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthCoontext } from '../../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');

    const navigate = useNavigate();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const {providerLogin} = useContext(AuthCoontext);

    let location = useLocation();

    let from = location.state?.from?.pathname || '/';
    console.log(from);

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user);
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => setError(error.message))
    }

    const handleGitHubSignIn = () => {
        providerLogin(githubProvider)
            .then(res => {
                console.log(res.user);
                setError('');
                navigate(from, {replace: true});
            })
            .catch(error => setError(error.message))
    }

    const {signIn} = useContext(AuthCoontext);

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
                navigate(from, {replace: true});
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required/>
                </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Form.Text className='text-danger'>
            {error}
      </Form.Text>
    </Form>
            </div>
            <Button onClick={handleGoogleSignIn}>Google</Button>
            <Button onClick={handleGitHubSignIn}>GitHub</Button>
        </div>
    );
};

export default Login;