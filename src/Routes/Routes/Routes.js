import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
// import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/login/Login";
import Register from "../../Pages/Login/register/Register";
import Checkout from "../../Pages/checkout/Checkout"
import PrivateRoute from "../PrivateRoute/PrivateRoute"
import CourseHome from "../../Pages/CourseHome/CourseHome"
import Blog from "../../Pages/Blog/Blog";
import Error from "../../Pages/Error/Error";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                children: [
                    {
                        path: '/courses',
                        element: <CourseHome></CourseHome>
                    },
                    {
                        path: '/courses/:name',
                        loader: ({params}) => {
                            return fetch(`https://c-school.vercel.app/course/${params.name}`)
                        },
                        element: <CourseDetails></CourseDetails>
                    },
                    {
                        path: '/courses/course/:id',
                        loader: ({params}) => {
                            return fetch(`https://c-school.vercel.app/${params.id}`)
                        },
                        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
                    }
                ]
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])