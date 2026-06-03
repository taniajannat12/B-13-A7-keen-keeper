import React, { useEffect, useState } from 'react';

const Timeline = () => {
    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        fetch('/Friends.json')
            .then(res => res.json())
            .then(data => {
                const allEntries = data.flatMap(f => f.timeline || []);
                setTimelineData(allEntries);
            });
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold mb-6">Timeline</h1>
            
       
            <select className="mb-4 p-2 border rounded-lg text-sm bg-gray-50">
                <option>Filter timeline</option>
                <option>Meetup</option>
                <option>Text</option>
                <option>Call</option>
            </select>

            <div className="space-y-4">
                {timelineData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 border-b border-gray-100 hover:bg-gray-50">
                        <div className="text-2xl bg-gray-100 p-2 rounded-full">
                            {item.type === 'meetup' && '🤝'}
                            {item.type === 'text' && '💬'}
                            {item.type === 'call' && '📞'}
                            {item.type === 'video' && '📹'}
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">{item.text}</p>
                            <p className="text-xs text-gray-400">{item.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;