import React, { createContext } from 'react';
import useAuth from '../hooks/useAuth';
import useBillings from '../hooks/useBillings';
import Body from './Body';
import Header from './Header';

export const billingContext = createContext('billings')
export const userContext = createContext('user')
const Layout = () => {
    const { allBillings, billings, setBillings, loading, refetch, page, setPage, totalPage } = useBillings()

    const { user, setUser, loading: userLoading, setLoading } = useAuth()

    return (

        <div>
            <billingContext.Provider value={{ allBillings, billings, setBillings, loading, refetch, page, setPage, totalPage }}>
                <userContext.Provider value={{ user, setUser, userLoading, setLoading }}>

                    <Header />
                    <main className="container mx-auto px-5 md:px-10 lg:px-32">

                        <Body />
                    </main>
                </userContext.Provider>
            </billingContext.Provider>
        </div>
    );
};

export default Layout;