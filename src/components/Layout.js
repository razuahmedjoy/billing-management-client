import React from 'react';
import Body from './Body';
import Header from './Header';

const Layout = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-5 md:px-10 lg:px-32">

                <Body />
            </main>
        </div>
    );
};

export default Layout;