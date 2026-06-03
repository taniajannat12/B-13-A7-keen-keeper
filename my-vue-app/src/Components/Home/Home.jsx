import React from 'react';
import { Link } from 'react-router-dom'; 
import Banner from '../Banner';

const Home = () => {
    return (
        <div>
            <header className="flex items-center justify-between px-12 py-6 border-b border-gray-100">
                <div className="text-xl font-bold text-emerald-900">KinKeeper</div>
                <nav className="flex gap-6 text-sm font-medium text-gray-600">
                    
                    <Link to="/" className="hover:text-emerald-800">Home</Link>
                    <Link to="/Timeline" className="hover:text-emerald-800">Timeline</Link>
                    <Link to="/Chart" className="hover:text-emerald-800">Stats</Link>
                </nav>
            </header>
            <Banner/>
        </div>
    );
};

export default Home;