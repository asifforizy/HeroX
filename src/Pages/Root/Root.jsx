import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

import { Outlet, useNavigation } from 'react-router';

const Root = () => {

    const navigation = useNavigation();

    const isLoading = navigation.state === "loading";

    return (
        <div className='w-11/12 mx-auto'>

            <Navbar />

            {
                isLoading ? (

                    <div className="min-h-[70vh] flex justify-center items-center">

                        <span className="loading loading-spinner loading-lg text-primary"></span>

                    </div>

                ) : (

                    <Outlet />

                )
            }

            <Footer />

        </div>
    );
};

export default Root;