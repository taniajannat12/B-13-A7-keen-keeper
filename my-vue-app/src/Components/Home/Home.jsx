import React from 'react';
import Friends from '../Friends';
import Banner from '../Banner';

const Home = () => {
    return (
        <div>
            <header className="flex items-center justify-between px-12 py-6">
  <div className="text-xl font-bold text-emerald-900">KinKeeper</div>
  <nav className="flex gap-6 text-sm font-medium text-gray-600">
    <a href="#" className="hover:text-emerald-800">Home</a>
    <a href="#" className="hover:text-emerald-800">Timeline</a>
    <a href="#" className="hover:text-emerald-800">Stats</a>
  </nav>
</header>




        </div>
    );
};

export default Home;