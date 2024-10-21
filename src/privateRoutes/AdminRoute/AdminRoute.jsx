import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../../config/routes";
import { readFromLocalStorage } from "../../helpers/readAndWritetoLocalStorage";

const AdminRoute = ({ children }) => {

    const user = readFromLocalStorage('user');

    return (
        <>
            {
                user && user?.role === 'admin' ? children : user && user?.role === 'user' ? <Navigate to={routes.portal.user.dashboard} /> : <Navigate to={routes.home} />
            }
        </>
    );
};

export default AdminRoute;
