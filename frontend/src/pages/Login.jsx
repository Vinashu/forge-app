import React, {useState, useEffect} from 'react';
import {FaSignInAlt} from 'react-icons/fa';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login, reset } from '../features/auth/authSlice';
import { Spinner } from '../components';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isSuccess, isError, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if(isError) {
            toast.error(message);
        }

        // Redirect when logged in
        if(isSuccess || user) {
            navigate('/');
        }

        dispatch(reset());
    },[isError, isSuccess, user, message, navigate, dispatch]);    

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    };

    const onSubmit = (event) => {
        event.preventDefault();   

        const userData = {
            email, 
            password
        }

        dispatch(login(userData));
    };

    const { email, password } = formData;

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please log in to get support.</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type='text'
                            className='form-control'
                            id='email'
                            name='email'
                            value={email}
                            onChange={handleChange}
                            placeholder="Type your email"
                            required
                        />
                    </div>         
                    <div className="form-group">
                        <input 
                            type='password'
                            className='form-control'
                            id='password'
                            name='password'
                            value={password}
                            onChange={handleChange}
                            placeholder="Type your password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block btn-std">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
};

export default Login;