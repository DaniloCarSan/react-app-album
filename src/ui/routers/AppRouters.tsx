import { useRoutes } from "react-router-dom";
import HomePage from "../pages/Home";

const AppRouters = () => {
    return useRoutes([
        { path: '/', element: <HomePage /> },
    ]);
}

export default AppRouters;