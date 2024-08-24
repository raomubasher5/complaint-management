import React, { useState } from 'react';
import Layout from '../layout/Layout';

const SuppressionRegistration = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        requestedBySuppress: '',
        suppressedBy: '',
        customerNameSuppress: '',
        dlFrequencySuppress: '',
        ulFrequencySuppress: '',
        transponderNameSuppress: '',
        reasonSuppress: '',
        requestedByRelease: '',
        releasedBy: '',
        customerNameRelease: '',
        dlFrequencyRelease: '',
        ulFrequencyRelease: '',
        transponderNameRelease: '',
        reasonRelease: ''
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Layout>
            <div className="w-full mx-auto  bg-background rounded-lg shadow-md p-12">
                <h1 className="text-2xl font-bold text-center mb-6 text-foreground">Suppression Registration</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Suppress Section */}
                    <div className="p-4 border border-border rounded-lg bg-card">
                        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Suppress</h2>

                        <label className="block mb-2 text-left text-foreground">
                            Requested By:
                            <input
                                type="text"
                                name="requestedBySuppress"
                                value={formData.requestedBySuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 bg-gray-100 border border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Suppressed By:
                            <input
                                type="text"
                                name="suppressedBy"
                                value={formData.suppressedBy}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input bg-gray-100 rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Customer Name:
                            <input
                                type="text"
                                name="customerNameSuppress"
                                value={formData.customerNameSuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 border bg-gray-100 border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            D/L Frequency:
                            <input
                                type="text"
                                name="dlFrequencySuppress"
                                value={formData.dlFrequencySuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input bg-gray-100   rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            U/L Frequency:
                            <input
                                type="text"
                                name="ulFrequencySuppress"
                                value={formData.ulFrequencySuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 bg-gray-100  border border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Transponder Name:
                            <input
                                type="text"
                                name="transponderNameSuppress"
                                value={formData.transponderNameSuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 bg-gray-100 border border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Reason:
                            <textarea
                                name="reasonSuppress"
                                value={formData.reasonSuppress}
                                onChange={handleChange}
                                className="mt-1 p-2 bg-gray-100 border border-input rounded w-full bg-background text-foreground"
                                rows="3"
                            />
                        </label>
                    </div>

                    {/* Release Section */}
                    <div className="p-4 border border-border rounded-lg bg-card">
                        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Release</h2>

                        <label className="block mb-2 text-left text-foreground">
                            Requested By:
                            <input
                                type="text"
                                name="requestedByRelease"
                                value={formData.requestedByRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border bg-gray-100 border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Released By:
                            <input
                                type="text"
                                name="releasedBy"
                                value={formData.releasedBy}
                                onChange={handleChange}
                                className="mt-1 p-2 border bg-gray-100 border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Customer Name:
                            <input
                                type="text"
                                name="customerNameRelease"
                                value={formData.customerNameRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border bg-gray-100 border-input rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            D/L Frequency:
                            <input
                                type="text"
                                name="dlFrequencyRelease"
                                value={formData.dlFrequencyRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input bg-gray-100 rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            U/L Frequency:
                            <input
                                type="text"
                                name="ulFrequencyRelease"
                                value={formData.ulFrequencyRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input bg-gray-100 rounded w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Transponder Name:
                            <input
                                type="text"
                                name="transponderNameRelease"
                                value={formData.transponderNameRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input rounded bg-gray-100 w-full bg-background text-foreground"
                            />
                        </label>

                        <label className="block mb-2 text-left text-foreground">
                            Reason:
                            <textarea
                                name="reasonRelease"
                                value={formData.reasonRelease}
                                onChange={handleChange}
                                className="mt-1 p-2 border border-input rounded w-full bg-gray-100 bg-background text-foreground"
                                rows="3"
                            />
                        </label>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button className="bg-blue-500 font-bold text-white hover:bg-blue-700/80 py-2 px-4 rounded-lg">Submit</button>
                </div>
            </div>

        </Layout>
    );
};

export default SuppressionRegistration;
