import React, { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { Link,useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';

import axios from 'axios';
import { toast } from 'react-toastify';
import { userContext } from '../components/Layout';

const Login = () => {
    const { user,setUser, userLoading } = useContext(userContext)
    const navigate = useNavigate()

    const [inputError, setInputError] = useState('');

    const { register, formState: { errors }, handleSubmit } = useForm();

    // console.log(location)

    if(user){

        navigate('/');

    }

    if (userLoading) {
        return (
            <div className="my-20">
                <Loader />
            </div>
        )
    }

    const onSubmit = async (e) => {
        const userInfo = {
            email:e.email,
            password:e.password
        }
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/login`,userInfo);
        const {data} = response;
        console.log(data)
        if(data.status === 'success'){
            setUser(data.userData);
            localStorage.setItem('billingUser',JSON.stringify(data.userData));
            navigate("/");

        }else{
            toast.error(data.message)
        }

    }

    return (
        <div className="min-h-screen max-w-md mx-auto grid place-content-center">
            <div className="border-primary border-2 p-5 rounded-md bg-base-100 shadow-xl mx-2">
                <div className="text-center">
                    <div className="text-xl md:text-4xl font-bold text-center">Login</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="email">Email Address</label>

                        <input type="email" placeholder="Email.." name="email" className="input input-bordered w-full" {...register("email", { required: true })} />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        <br></br>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password.." className="input input-bordered w-full"  {...register("password", { required: true })} />


                        {errors.password && <span className="text-red-500 text-sm">Passsword is required</span>}

                        <br></br>
                        <input className="btn btn-secondary btn-sm rounded-full mx-auto text-center mt-5" type="submit" value="Login" />
                        <br></br>
                        {inputError && <span className="text-red-500 text-sm">{inputError}</span>}

                        <p className="text-sm pt-2">Don't Have any account? <Link className="link" to='/register'>Sign Up</Link> </p>
                   
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;