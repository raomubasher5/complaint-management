import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layout/Layout';
import { format } from 'date-fns';
import { doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';
import { toast } from 'react-toastify';

const ComplaintDetails = () => {
    const { id } = useParams();
    const [complaint, setComplaint] = useState(null);
    const [status, setStatus] = useState('');

    useEffect(() => {
        const fetchComplaint = async () => {
            try {
                const docRef = doc(fireDB, 'complaints', id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const complaintData = docSnap.data();
                    setComplaint({ id: docSnap.id, ...complaintData });
                    setStatus(complaintData.status || ''); // Set initial status
                } else {
                    console.log('No such document!');
                }
            } catch (error) {
                console.error('Error fetching complaint:', error);
                toast.error("Error in fetching the complaint");
            }
        };

        fetchComplaint();
    }, [id]);

    const formatDate = (timestamp) => {
        if (timestamp instanceof Timestamp) {
            return format(timestamp.toDate(), 'MMM dd, yyyy');
        }
        if (timestamp && typeof timestamp === 'string') {
            return format(new Date(timestamp), 'MMM dd, yyyy');
        }
        return 'N/A';
    };

    const formatTime = (timestamp) => {
        if (timestamp instanceof Timestamp) {
            return format(timestamp.toDate(), 'HH:mm');
        }
        if (timestamp && typeof timestamp === 'string') {
            return format(new Date(timestamp), 'HH:mm');
        }
        return 'N/A';
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const docRef = doc(fireDB, 'complaints', id);
            await updateDoc(docRef, { status });
            setComplaint(prev => ({ ...prev, status }));
            toast.success("complaint updated Successfully");
        } catch (error) {
            console.error('Error updating status:', error);
            toast.error("Error in updating the status");
        }
    };

    if (!complaint) {
        return <p>Loading...</p>;
    }

    return (
        <Layout>
            <div className="p-12">
                <h1 className="text-2xl font-bold mb-4">Complaint Details</h1>
                <div className="border border-border rounded-lg p-4 bg-gray-100">
                    <p className="font-semibold">Token no. {complaint.id}</p>
                    <p>Date: {formatDate(complaint.date)}</p>
                    <p>Time: {formatTime(complaint.time)}</p>
                    <p>Customer Name: {complaint.customerName}</p>
                    <p>Customer Representative: {complaint.customerRepresentative}</p>
                    <p>Customer Type: {complaint.customerType}</p>
                    <p>Operating Band: {complaint.operatingBand}</p>
                    <p>Complaint Detail: {complaint.complaintDetail}</p>
                    <p>Complaint Remarks: {complaint.complaintRemarks}</p>
                    <p>Tech Support Representative: {complaint.techSupportRepresentative}</p>

                    <form onSubmit={handleSubmit} className="mt-4">
                        <div className="mb-4">
                            <label htmlFor="status" className="block font-semibold mb-2">Status:</label>
                            <select 
                                id="status" 
                                value={status} 
                                onChange={handleStatusChange} 
                                className="border border-border rounded-lg p-2 w-full"
                            >
                                <option value="">Select status</option>
                                <option value="Pending">Pending</option>
                                <option value="Resolved">Resolved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white hover:bg-blue-600/80 p-2 rounded-lg"
                        >
                            Update Status
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ComplaintDetails;
