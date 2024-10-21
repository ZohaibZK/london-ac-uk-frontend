import React from "react";
import { Navigate } from "react-router-dom";
import routes from "../../config/routes";
import { readFromLocalStorage } from "../../helpers/readAndWritetoLocalStorage";

const AuthRoute = ({ children }) => {

    const user = readFromLocalStorage('user');

    return (
        <>
            {
                !user ? children : <Navigate to={routes.home} />
            }
        </>
    );
};

export default AuthRoute;
