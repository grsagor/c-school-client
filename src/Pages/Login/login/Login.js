import { GoogleAuthProvider, GithubAuthProvider  } from 'firebase/auth';
import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { AuthCoontext } from '../../../contexts/AuthProvider/AuthProvider';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const {providerLogin} = useContext(AuthCoontext);

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user);
            })
    }

    const handleGitHubSignIn = () => {
        providerLogin(githubProvider)
            .then(res => {
                console.log(res.user);
            })
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
                navigate('/courses');
            })
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
    </Form>
            </div>
            <Button onClick={handleGoogleSignIn}>Google</Button>
            <Button onClick={handleGitHubSignIn}>GitHub</Button>
        </div>
    );
};

export default Login;