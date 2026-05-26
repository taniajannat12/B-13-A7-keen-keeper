import React, { Suspense, use } from 'react';
import { PacmanLoader } from 'react-spinners';
import DetailsPage from './DetailsPage';
import { Link } from 'react-router-dom';
const friendPromise = fetch('/Friends.json').then((res) => res.json());

const App = () => {
    const apps = use(friendPromise);
    
    return (
        <div className="p-10 bg-gray-50 min-h-screen">
            <h1 className='p-12 text-2xl font-bold'>Your Friends</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apps.map((friend) => (
                    <div key={friend.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                       <Link to={`/details/${friend.id}`}><img 
                            src={friend.picture} 
                            alt={friend.name} 
                            className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-white shadow-md"
                        /></Link>
                        <h2 className="text-xl font-bold text-gray-800">{friend.name}</h2>
                        <p className="text-sm text-gray-400 mb-3 font-medium">
                            {friend.days_since_contact} days ago
                        </p>
                        <div className="flex flex-col gap-2 w-full items-center">
                            <div className="bg-green-50 text-green-700 px-3 py-0.5 rounded-md text-xs font-bold uppercase tracking-wide">
                                {friend.tags}
                            </div>
                            <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider
                                ${friend.status === 'overdue' ? 'bg-red-50 text-red-600' : 
                                friend.status === 'almost due' ? 'bg-orange-50 text-orange-600' : 
                                'bg-emerald-50 text-emerald-700'}`}>
                                {friend.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Friends = () => {
    return (<>
        <Suspense fallback={
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                <PacmanLoader color="#36d7b7" size={25} />
            </div>
        }>
            <App />
        </Suspense>


   
        </>
    );
};

export default Friends;