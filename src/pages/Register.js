import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Loader from '../components/Loader';
import useAuth from '../hooks/useAuth';
import { Link,useNavigate  } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {

    const [inputError, setInputError] = useState('');
    const [processing,setProcessing] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const {user,loading} = useAuth();

    if(user){

        navigate('/');

    }

    const onSubmit = async (e) => {

        setProcessing(true)


        setInputError('')
        const email = e.email;
        const password = e.password;
        const password2 = e.password2;

        if (password === password2) {
            const url = `${process.env.REACT_APP_API_URL}/registration`;
            const res = await axios.post(url,{email,password});
            const {data} = res;

            if(data.status === 'success'){
                toast.success("User Created Successfully, Login Please");
                navigate('/login');
            }else{
                toast.error(data.message);
            }
            
          
            


        } else {
            setInputError('Both password field should be same')

        }

        setProcessing(false)
      
    }

    useEffect(() => {
    
    }, [])





    if (loading) {
        return (
            <div className="my-20">
                <Loader />
            </div>
        )
    }
    return (
        <div className="min-h-screen max-w-md mx-auto grid place-content-center">
            <div className="border-primary border-2 p-5 rounded-md bg-base-100 shadow-xl mx-2">
                <div className="text-center">
                    <div className="text-xl md:text-4xl font-bold text-center">Register</div>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>

               


                        <label htmlFor="email">Email Address</label>

                        <input type="email" placeholder="Email.." className="input input-bordered my-2 w-full" {...register("email", { required: true })} required />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                        <br></br>

                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Password.." className="input input-bordered my-2 w-full"  {...register("password", { required: true, minLength: 6 })} required />


                        {errors.password?.type === 'required' && <span className="text-red-500 text-sm">Passsword is required</span>}
                        {errors.password?.type === 'minLength' && <span className="text-red-500 text-sm">Minimum 6 Characters</span>}
                        <br></br>

                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" placeholder="Confirm Password" className="input my-2 input-bordered w-full"  {...register("password2", { required: true, minLength: 6 })} required />

                        {errors.password2?.type === 'required' && <span className="text-red-500 text-sm">Passsword is required</span>}
                        {errors.password2?.type === 'minLength' && <span className="text-red-500 text-sm">Minimum 6 Characters</span>}<br></br>
                        {inputError && <span className="text-red-500 text-sm">{inputError}</span>}

                        <br></br>
                        <button className={`btn btn-secondary btn-sm rounded-full mx-auto text-center mt-5 ${processing && 'loading'}`} type="submit">Create Account</button>

                        <p className="text-sm pt-2">Already have an account? <Link className="link" to='/login'>Login</Link> </p>
                    </form>

                    <div className="flex flex-col w-full border-opacity-50">

               

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;