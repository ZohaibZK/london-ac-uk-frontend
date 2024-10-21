import React from "react";
import { useNavigate } from "react-router-dom";

import { readFromLocalStorage } from "../../helpers/readAndWritetoLocalStorage";
import CustomButton from "../common/Button/Button";
import routes from "../../config/routes";

import './home.scss';

const Home = () => {
    const user = readFromLocalStorage('user');
    const navigate = useNavigate();

    const goToDashboard = () => {
        if (!user) {
            navigate(routes.auth.login)
        } else if (user?.role === 'admin') {
            navigate(routes.portal.admin.dashboard)
        } else if (user?.role === 'user') {
            navigate(routes.portal.user.dashboard)
        }
    }
    return (
        <div id='home-wrapper'>
            <div className="row">
                <div className="col-md-12">
                    <h1>
                        Hello {user ? user?.name?.toUpperCase() : 'There'}!!!
                    </h1>
                </div>
                <div className="col-md-12">
                    <p>
                        We are excited to share the amazing plaform with you. Incase of query you know where to reach us.
                    </p>
                    <CustomButton handleClick={goToDashboard} title={user ? 'Go To Dashboard' : 'Login To Continue'} />
                </div>
            </div>
        </div>
    )
}

export default Home;
