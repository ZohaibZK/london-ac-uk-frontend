import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip'

import routes from '../../../config/routes';
import Loader from '../../common/Loader/Loader';
import CustomButton from '../../common/Button/Button';
import { InputField } from '../../common/InputField/InputField';
import { FieldLabel } from '../../common/FieldLabel/FieldLabel';
import LoginContent from '../../../constants/Login';
import { writeToLocalStorage } from '../../../helpers/readAndWritetoLocalStorage';
import useForm from '../../../customHook/useForm';
import validate from './validation';

import logo from '../../../assests/logo-3.gif'

import './login.scss';

const Login = () => {

    const navigate = useNavigate();

    const [loader, setLoader] = useState(false);

    const initialValues = {
        email: "",
        password: "",
    };

    const handleLogin = () => {
        if (values.email !== LoginContent.adminLoggedIn.email && values.email !== LoginContent.userLoggedIn.email) {
            toast.error('User does not exist.')
        } else if (values.password !== 'Test@123') {
            toast.error('Invalid Credentials')
        } else {
            setLoader(true)
            setTimeout(() => {
                toast.success('Congratulations you are logged in.')
                if (values.email === LoginContent.adminLoggedIn.email) {
                    writeToLocalStorage('user', LoginContent.adminLoggedIn)
                    navigate(routes.portal.admin.dashboard)
                } else {
                    writeToLocalStorage('user', LoginContent.userLoggedIn)
                    navigate(routes.portal.user.dashboard)
                }
                setLoader(false)
            }, 2500)
        }
    }

    const { handleChange, handleSubmit, values, errors } = useForm(
        initialValues,
        validate,
        handleLogin
    );

    return (
        <Form className="login-form" onSubmit={handleSubmit}>
            <div className='logo-img'>
                <img src={logo} alt="Logo" title='Blackstone School of Law & Business' />
            </div>
            <div className='input-blk'>
                <FieldLabel title={'Email Address'}>
                    <AiOutlineQuestionCircle className="info-icon" id='email-tip'/>
                </FieldLabel>
                <InputField
                    name="email"
                    placeholder="Enter your email"
                    value={values.email}
                    onChange={handleChange}
                    className={(errors?.email || errors?.general) ? 'error' : ''}
                />
                {
                    errors?.email &&
                    <p className="error-message">
                        {errors.email}
                    </p>
                }
            </div>

            <div className='input-blk'>
                <FieldLabel title='Password'>
                    <AiOutlineQuestionCircle className="info-icon" id='password-tip'/>
                </FieldLabel>
                <InputField
                    name="password"
                    type={"password"}
                    placeholder="Enter your password"
                    value={values.password}
                    onChange={handleChange}
                    className={(errors?.password || errors?.general) ? 'error' : ''}
                />
                {
                    errors?.password &&
                    <p className="error-message">
                        {errors.password}
                    </p>
                }
                {
                    errors?.general &&
                    <p className="error-message">
                        {errors.general}
                    </p>
                }
            </div>
            <div className='btn-blk'>
                <CustomButton title={'Login'} type='submit' handleClick={handleSubmit} />
            </div>
            {
                loader && <Loader />
            }
            <Tooltip anchorSelect="#email-tip" place="top">
                Enter your registered email to login
            </Tooltip>
            <Tooltip anchorSelect="#password-tip" place="top">
                Enter your registered password to proceed
            </Tooltip>
        </Form>
    );
};

export default Login;
