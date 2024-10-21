import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Tooltip } from 'react-tooltip'

import logo from '../../assests/logo-3.gif'
import routes from "../../config/routes";
import LoginContent from "../../constants/Login";

import './authLayout.scss';

const AuthLayout = ({ children }) => {
    return (
        <Container fluid id="auth-container">
            <Row className="main-row">
                <Col md={6} className="left-side">
                    <Row style={{ height: '90vh' }}>
                        <Link to={routes.home} className="logo">
                            <img src={logo} alt="Logo" id='img-title' />
                        </Link>
                        <div className="left-content">
                            <h2>{LoginContent.heading}</h2>
                            <p>{LoginContent.description}</p>
                        </div>
                    </Row>
                </Col>
                <Col md={6} className="right-side d-flex align-items-center justify-content-center">
                    {children}
                </Col>
            </Row>
            <Tooltip anchorSelect="#img-title" place="top">
                Go back to home
            </Tooltip>
        </Container>
    )
}

export default AuthLayout;
