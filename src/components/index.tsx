
import { createBrowserRouter} from 'react-router-dom';

// components
import Home from './Home';
import Privacy from './Privacy';
import SimplePage from './SimplePage';
import ErrorPage from './ErrorPage';


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
        path: "/simplepage",
        element: <SimplePage/>,
    },
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "*",
        element: <ErrorPage/>,
    }
])

export default router;