import { useRoutes } from "react-router-dom";

import AlbumPage from "../pages/Album";
import HomePage from "../pages/Home";

const AppRouters = () => {
    return useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/albums/:id', element: <AlbumPage /> }
    ]);
}

export default AppRouters;