import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Basket from "./Containers/Basket";
import Home from "./Containers/Home";
import ErrorPage from "./error-page";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: <Basket />,
        errorElement: <ErrorPage />
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
        </>
    );
}

export default App;
