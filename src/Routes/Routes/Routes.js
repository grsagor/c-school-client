import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
// import Course from "../../Pages/Course/Course";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/login/Login";
import Register from "../../Pages/Login/register/Register";

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
                        path: '/courses/:name',
                        loader: async ({params}) => {
                            return fetch(`http://localhost:5000/course/${params.name}`)
                        },
                        element: <CourseDetails></CourseDetails>
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
            }
        ]
    }
])