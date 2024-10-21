import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import routes from "../../../config/routes";
import CustomButton from "../../common/Button/Button";
import { readFromLocalStorage } from "../../../helpers/readAndWritetoLocalStorage";

import './dashboard.scss';
import Loader from "../../common/Loader/Loader";

const Dashboard = () => {
    const user = readFromLocalStorage('user');
    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);
    const handleLogout = () => {
        setLoader(true);

        setTimeout(() => {
            setLoader(false);
            localStorage.clear();
            navigate(routes.home)
        }, 1500)
    }
    return (
        <div id='dashboard-wrapper'>
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        Welcome Back {user ? user?.name?.toUpperCase() : 'User'}!!!
                    </h1>
                </div>
                <div className="col-md-12 content-wrapper">
                    <p>
                        Start where your left...
                    </p>
                    <ul>
                        <li>{user?.name}</li>
                        <li>{user?.email}</li>
                    </ul>
                    <CustomButton handleClick={handleLogout} title={'Logout'} />
                </div>
            </div>
            {loader && <Loader />}
        </div>
    )
}

export default Dashboard;
