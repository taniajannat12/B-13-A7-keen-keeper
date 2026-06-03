import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BiPhoneCall } from "react-icons/bi";
import { IoIosText } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { BsArchive } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
const DetailsPage = () => {
    const { id } = useParams();
    const [friend, setFriend] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Friends.json')
            .then((res) => res.json())
            .then((data) => {
                const found = data.find((f) => String(f.id) === String(id));
                setFriend(found);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center p-20 text-xl">Loading...</div>;
    if (!friend) return <div className="text-center p-20 text-red-500">Friend not found!</div>;

    return (
        <div className="max-w-5xl mx-auto p-6 bg-gray-50 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <img src={friend.picture} alt={friend.name} className="w-24 h-24 rounded-full object-cover mb-4" />
                    <h1 className="text-xl font-bold text-gray-900">{friend.name}</h1>
                    <div className="my-2 space-y-1">
                        <span className={`block px-3 py-0.5 rounded-full text-[10px] font-bold uppercase ${friend.status === 'overdue' ? 'bg-red-50 text-red-600' : 'bg-emerald-50 text-emerald-700'}`}>{friend.status}</span>
                        <span className="block text-[10px] bg-green-100 text-green-800 px-3 py-0.5 rounded-full font-bold uppercase">{friend.tags || "FAMILY"}</span>
                    </div>
                    <p className="text-xs text-gray-400 italic mb-6">"Former colleague, great mentor" <br/> Preferred: email</p>
                    
                    <div className="w-full space-y-2">
                        <button className="w-full py-2 border border-gray-200 rounded-xl text-xs font-semibold"><RiNotificationSnoozeLine />Snooze 2 Weeks</button>
                        <button className="w-full py-2 border border-gray-200 rounded-xl text-xs font-semibold"><BsArchive />Archive</button>
                        <button className="w-full py-2 text-red-500 rounded-xl text-xs font-semibold"><RiDeleteBin6Line />Delete</button>
                    </div>
                </div>
                <div className="md:col-span-2 space-y-6">
                    <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <div className="text-center"><p className="text-2xl font-bold">{friend.days_since_contact}</p><p className="text-[10px] text-gray-400 uppercase">Days Since Contact</p></div>
                        <div className="text-center"><p className="text-2xl font-bold">30</p><p className="text-[10px] text-gray-400 uppercase">Goal (Days)</p></div>
                        <div className="text-center"><p className="text-2xl font-bold">Feb 27</p><p className="text-[10px] text-gray-400 uppercase">Next Due</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex justify-between items-center">
                        <div>
                            <p className="text-sm font-bold text-gray-600">Relationship Goal</p>
                            <p className="text-xs text-gray-400">Connect every <span className="font-bold text-gray-900">30 days</span></p>
                        </div>
                        <button className="px-4 py-1 text-xs border rounded-lg">Edit</button>
                    </div>
                    <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
                        <p className="text-xs font-bold text-gray-400 uppercase mb-4">Quick Check-in</p>
                           <div className="flex gap-4">
    {[
        { icon: <BiPhoneCall />, label: 'Call' },
        { icon: <IoIosText />, label: 'Text' },
        { icon: <CiVideoOn />, label: 'Video' }
    ].map((item) => (
        <button key={item.label} className="flex-1 py-4 border rounded-2xl text-xs font-bold hover:bg-gray-50 transition flex flex-col items-center gap-2">
            {item.icon}
            {item.label}
        </button>
    ))}
</div>
                        </div>
                    </div>
                </div>
            </div>
     
    );
};


export default DetailsPage;

