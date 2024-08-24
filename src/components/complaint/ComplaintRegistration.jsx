import React, { useState } from 'react';
import Layout from '../layout/Layout';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { fireDB } from '../../firebase/FirebaseConfig';

const ComplaintRegistration = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        customerName: '',
        customerRepresentative: '',
        customerType: '',
        operatingBand: '',
        complaintDetail: '',
        complaintRemarks: '',
        techSupportRepresentative: '',
        status: 'Pending',  
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            'en-US',
            {
                month: 'short',
                day: "2-digit",
                year: "numeric" 
            }
        )
    });

    // Handle input change
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(fireDB, 'complaints'), formData); // Add data to the 'complaints' collection
            alert('Complaint registered successfully!');
            setFormData({
                customerName: '',
                customerRepresentative: '',
                customerType: '',
                operatingBand: '',
                complaintDetail: '',
                complaintRemarks: '',
                techSupportRepresentative: '',
            }); // Reset the form
        } catch (error) {
            console.error('Error registering complaint: ', error);
            alert('Failed to register complaint. Please try again.');
        }
    };

    return (
        <Layout>
            <div className="max-w-full mx-4 p-6 bg-white rounded-lg shadow-md m-4">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Complaint Registration</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-left text-gray-600 mb-1" htmlFor="customerName">Customer Name:</label>
                            <input
                                type="text"
                                id="customerName"
                                value={formData.customerName}
                                onChange={handleChange}
                                className="w-full p-2 border bg-gray-100 border-gray-300 rounded"
                                placeholder="Enter customer name"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-600 mb-1" htmlFor="customerRepresentative">Customer Representative:</label>
                            <input
                                type="text"
                                id="customerRepresentative"
                                value={formData.customerRepresentative}
                                onChange={handleChange}
                                className="w-full p-2 border bg-gray-100 border-gray-300 rounded"
                                placeholder="Enter representative name"
                            />
                        </div>
                        <div>
                            <label className="block text-left text-gray-600 mb-1" htmlFor="customerType">Customer Type:</label>
                            <select
                                id="customerType"
                                value={formData.customerType}
                                onChange={handleChange}
                                className="w-full p-2 border bg-gray-100 border-gray-300 rounded"
                            >
                                <option value="" disabled>Select the Type</option>
                                <option value="Broadcasting">Broadcasting</option>
                                <option value="Data">Data</option>
                                <option value="DSNG">DSNG</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-left text-gray-600 mb-1" htmlFor="operatingBand">Operating band:</label>
                            <select
                                id="operatingBand"
                                value={formData.operatingBand}
                                onChange={handleChange}
                                className="w-full p-2 border bg-gray-100 border-gray-300 rounded"
                            >
                                <option value="" disabled>Select the Operating band</option>
                                <option value="C Band">C Band</option>
                                <option value="Ku Band">Ku Band</option>
                                <option value="Ka Band">Ka Band</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-gray-600 mb-1" htmlFor="complaintDetail">Complaint Detail:</label>
                        <textarea
                            id="complaintDetail"
                            value={formData.complaintDetail}
                            onChange={handleChange}
                            className="w-full bg-gray-100 p-2 border border-gray-300 rounded"
                            rows={4}
                            placeholder="Enter complaint details"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-gray-600 mb-1" htmlFor="complaintRemarks">Complaint Remarks:</label>
                        <textarea
                            id="complaintRemarks"
                            value={formData.complaintRemarks}
                            onChange={handleChange}
                            className="w-full bg-gray-100 p-2 border border-gray-300 rounded"
                            rows={4}
                            placeholder="Enter remarks"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-left text-gray-600 mb-1" htmlFor="techSupportRepresentative">Tech Support Representative:</label>
                        <input
                            type="text"
                            id="techSupportRepresentative"
                            value={formData.techSupportRepresentative}
                            onChange={handleChange}
                            className="w-full bg-gray-100 p-2 border border-gray-300 rounded"
                            placeholder="Enter tech support representative name"
                        />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600 w-full p-2 font-bold rounded">Submit</button>
                </form>
            </div>
        </Layout>
    );
};

export default ComplaintRegistration;
