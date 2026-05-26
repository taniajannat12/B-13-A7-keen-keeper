import React from 'react';

const Banner = () => {
    return (
        <div>
            
<section className="flex flex-col items-center py-16 text-center">
  <h1 className="text-4xl font-semibold text-gray-900">Friends to keep close in your life</h1>
  <p className="mt-4 text-gray-500 max-w-lg">Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
  <button className="mt-8 px-6 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-700 transition">
    + Add a Friend
  </button>
</section>
        </div>
    );
};

export default Banner;