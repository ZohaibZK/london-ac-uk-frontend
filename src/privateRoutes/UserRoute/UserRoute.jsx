import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../../config/routes";
import { readFromLocalStorage } from "../../helpers/readAndWritetoLocalStorage";

const UserRoute = ({ children }) => {

    const user = readFromLocalStorage('user');

    return (
        <>
            {
                user && user?.role === 'user' ? children : user && user?.role === 'admin' ? <Navigate to={routes.portal.admin.dashboard} /> : <Navigate to={routes.home} />
            }
        </>
    );
};

export default UserRoute;
