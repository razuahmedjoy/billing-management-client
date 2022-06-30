import React, { createContext } from 'react';
import useBillings from '../hooks/useBillings';
import Body from './Body';
import Header from './Header';

export const billingContext = createContext('billings')
const Layout = () => {
    const {allBillings, billings, setBillings, loading, refetch,page,setPage,totalPage } = useBillings()

    return (

        <div>
            <billingContext.Provider value={{allBillings,billings, setBillings, loading, refetch,page,setPage,totalPage}}>

                <Header />
                <main className="container mx-auto px-5 md:px-10 lg:px-32">

                    <Body />
                </main>
            </billingContext.Provider>
        </div>
    );
};

export default Layout;