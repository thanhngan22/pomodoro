
import { createBrowserRouter} from 'react-router-dom';

// components
import Home from './Home';
import Privacy from './Privacy';
import SimplePage from './SimplePage';
import ErrorPage from './ErrorPage';
import Login from './Login';
import SignUp from './SignUp';


const router = createBrowserRouter([
    {
        path: "/home",
        element: <Home/>,
    },
    {
        path: "/privacy",
        element: <Privacy/>,

    },
    {
        path: "/app",
        element: <SimplePage/>,
    },
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "*",
        element: <ErrorPage/>,
    }
])

export default router;