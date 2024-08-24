import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout';
import { collection, getDocs } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { format } from 'date-fns'; 
import { Link } from 'react-router-dom';

const ResolvedComplaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [searchName, setSearchName] = useState('');

    // Fetch complaints from Firestore
    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const querySnapshot = await getDocs(collection(fireDB, 'complaints'));
                const complaintsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setComplaints(complaintsData);
                setFilteredComplaints(complaintsData.filter(complaint => complaint.status === 'Resolved'));
            } catch (error) {
                console.error('Error fetching complaints:', error);
            }
        };

        fetchComplaints();
    }, []);

    // Format Firestore Timestamp
    const formatDate = (timestamp) => {
        if (timestamp && timestamp.toDate) {
            return format(timestamp.toDate(), 'MMM dd, yyyy');
        }
        if (timestamp && typeof timestamp === 'string') {
            return format(new Date(timestamp), 'MMM dd, yyyy');
        }
        return 'N/A';
    };

    const formatTime = (timestamp) => {
        if (timestamp && timestamp.toDate) {
            return format(timestamp.toDate(), 'HH:mm');
        }
        if (timestamp && typeof timestamp === 'string') {
            return format(new Date(timestamp), 'HH:mm');
        }
        return 'N/A';
    };

    // Filter complaints by customer name
    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchName(value);
        const filtered = complaints.filter(complaint =>
            complaint.customerName.toLowerCase().includes(value.toLowerCase()) &&
            complaint.status === 'Resolved'
        );
        setFilteredComplaints(filtered);
    };

    return (
        <Layout>
            <div className="p-12">
                <h1 className="text-2xl font-bold mb-4">Resolved Complaints</h1>
                <div className="flex items-center mb-4">
                    <input 
                        type="text" 
                        value={searchName} 
                        onChange={handleSearchChange} 
                        placeholder="Customer Name" 
                        className="border border-border rounded-lg p-2 flex-grow" 
                    />
                    <button className="ml-2 bg-blue-500 text-white hover:bg-blue-600/80 p-2 rounded-lg">
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
                        <p>No resolved complaints found.</p>
                    )}
                </div>
            </div>
        </Layout>
    );
};

export default ResolvedComplaints;
    