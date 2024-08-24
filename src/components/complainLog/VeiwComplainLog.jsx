import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { collection, getDocs, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { format } from 'date-fns'; 
import { Link } from 'react-router-dom';

const VeiwComplainLog = () => {
    const [complaints, setComplaints] = useState([]);
    const [filter, setFilter] = useState(''); // State for filter term

    // Fetch complaints from Firestore on component mount
    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDB, 'complaints'));
                const complaintsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setComplaints(complaintsData);
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        fetchComplaints();
    }, []);

    // Format Firestore Timestamp
    const formatDate = (date) => {
        if (date instanceof Timestamp) {
            return format(date.toDate(), 'MMM dd, yyyy');
        }
        if (typeof date === 'string') {
            return format(new Date(date), 'MMM dd, yyyy');
        }
        return 'N/A';
    };

    const formatTime = (time) => {
        if (time instanceof Timestamp) {
            return format(time.toDate(), 'HH:mm');
        }
        if (typeof time === 'string') {
            return format(new Date(time), 'HH:mm');
        }
        return 'N/A';
    };

    // Filter complaints based on customer name
    const filteredComplaints = complaints.filter(complaint => 
        complaint.customerName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Layout>
            <div className="p-12">
                <h1 className="text-2xl font-bold mb-4">View Complaint Log</h1>
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="Customer Name"
                        className="border border-border rounded-lg p-2 flex-grow"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <button
                        className="ml-2 bg-blue-500 text-white hover:bg-blue-600/80 p-2 rounded-lg"
                        onClick={() => setFilter(filter)} // Triggers re-render on button click
                    >
                        <span>Filter</span>
                    </button>
                </div>
                <div className="space-y-4">
                    {filteredComplaints.length > 0 ? (
                        filteredComplaints.map(complaint => (
                            <div key={complaint.id} className="border border-border rounded-lg p-4 bg-gray-100">
                                <div className="flex justify-between">
                                    <p className="font-semibold">Token no. {complaint.id}</p>
                                    <p>Date: {formatDate(complaint.date)}</p>
                                    <p>Time: {formatTime(complaint.time)}</p>
                                </div>
                                <p className="mt-2 text-left">Customer Name: {complaint.customerName}</p>
                                <Link to={`/complaint/${complaint.id}`} className="text-blue-500 hover:underline">View Details</Link>
                            </div>
                        ))
                    ) : (
                        <p>No complaints found.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default VeiwComplainLog;
