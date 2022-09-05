import { useRoutes } from "react-router-dom";

import AlbumPage from "../pages/Album";
import HomePage from "../pages/Home";
import PhotoPage from "../pages/Photo";

const AppRouters = () => {
    return useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/albums/:id', element: <AlbumPage /> },
        { path: 'albums/:album/photos/:photo', element: <PhotoPage /> }
    ]);
}

export default AppRouters;