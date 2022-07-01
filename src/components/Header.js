import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { billingContext, userContext } from './Layout';
import Loader from './Loader';

const Header = () => {
    const { user, userLoading } = useContext(userContext)
    const { allBillings, billings, setBillings, loading, refetch } = useContext(billingContext)
    // console.log(user, userLoading);
    if(userLoading){
        return;
    }

    const getTotal = (prev, current) => {
        return prev + parseInt(current.amount)
    }

    return (
        <>
            <header className="h-[80px] md:h-[80px] border-b border-gray-200 px-5 md:px-10 lg:px-32 py-1 md:py-2 flex justify-between items-center">
                <div className="brand-logo w-fit p-1 md:p-2">
                    <NavLink to="/" className="text-xl font-semibold">Logo</NavLink>
                </div>
                <div className="navigation">
                    <ul className="flex gap-x-8 md:text-md lg:text-lg font-poppin">
                        {
                            user ?
                                <li>
                                    <button className="py-1 px-3 rounded-full bg-primary text-white">Paid Total :
                                        {
                                            allBillings?.reduce(getTotal, 0)
                                        }
                                    </button>

                                </li>
                                :
                                <>
                                    <li>
                                        <NavLink to="/login" className="py-1 px-3 rounded-full bg-primary text-white">
                                            Login
                                        </NavLink>

                                    </li>
                                    <li>
                                        <NavLink to="/register" className="py-1 px-3 rounded-full bg-primary text-white">Register
                                        </NavLink>

                                    </li>

                                </>
                        }

                    </ul>
                </div>



            </header>


        </>
    );
};

export default Header;