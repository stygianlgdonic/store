import { lazy, Suspense } from "react";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./Containers/Home";
import ErrorPage from "./error-page";
import CircularLoader from "./components/Loader/CircularLoader";

const Basket = lazy(() => import('./Containers/Basket'));
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: (
            <Suspense fallback={<CircularLoader />}>
                <Basket />
            </Suspense>
        ),
        errorElement: <ErrorPage />
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
