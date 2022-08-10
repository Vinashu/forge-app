import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {FaUser} from 'react-icons/fa';
import {toast} from 'react-toastify';
import {useSelector, useDispatch} from 'react-redux';
import {register, reset} from '../features/auth/authSlice';
import {Spinner} from '../components';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, isLoading, isSuccess, isError, message } = useSelector(state => state.auth);

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

        if(password !== password2) {
            toast.error('passwords do not match');
        } else {
            const userData = {
                name,
                email,
                password
            };

            dispatch(register(userData));
        }
    };

    const { name, email, password, password2 } = formData;

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please create an account.</p>
            </section>

            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input 
                            type='text'
                            className='form-control'
                            id='name'
                            name='name'
                            value={name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                        />
                    </div>
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
                        <input 
                            type='password'
                            className='form-control'
                            id='password2'
                            name='password2'
                            value={password2}
                            onChange={handleChange}
                            placeholder="Confirm your password"
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

export default Register;