import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DetailsPage = () => {


    const {id}=useParams()
const [friend,setFriend]=useState(null);
const [loading,setLoading]=useState(true)




useEffect(()=>{


    fetch('/Friends.json').then((res)=>res.json())
    .then((data)=>{


        const found=data.find((f)=>String(f.id)===String(id))
        setFriend(found);
        setLoading(false)
    })
}, [id])


if (loading) return <div>Loading...</div>;
    if (!friend) return <div>Friend not found!</div>;











    return (
    <div className="p-10">
            {/* এখানে friend অবজেক্টের ডেটা ব্যবহার করুন */}
            <h1 className="text-3xl font-bold">{friend.name}</h1>
            <img src={friend.picture} alt={friend.name} />
            <p>Days since contact: {friend.days_since_contact}</p>
        </div>
    );
};

export default DetailsPage;