import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">

                <h1 className="text-7xl font-bold text-red-500">
                    404
                </h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Oops! Page Not Found
                </h2>

               
                <Link
                    to="/"
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
                >
                    Back To Home
                </Link>

            </div>
        </div>
    );
};

export default ErrorPage;