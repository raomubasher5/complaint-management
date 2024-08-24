import React from 'react'
import Layout from '../layout/Layout'

const SuppressionLog = () => {
  return (
    <Layout>
           <div className="p-12">
                <h1 className="text-2xl font-bold mb-4">View Suppression Log</h1>
                <div className="flex items-center mb-4">
                    <input type="text" placeholder="Customer Name" className="border border-border rounded-lg p-2 flex-grow" />
                    <button className="ml-2 bg-blue-500 text-white  hover:bg-blue-600/80 p-2 rounded-lg">
                        <span>Filter</span>
                    </button>
                </div>
                <div className="space-y-4">
                    {/* Complain Log Item */}
                    <div className="border border-border rounded-lg p-4 bg-gray-100">
                        <div className="flex justify-between">
                            <p className="font-semibold">Token no. 08983420</p>
                            <p>Date: 22/12/2024</p>
                            <p>Time: 23:52</p>
                        </div>
                        <p className="mt-2 text-left">Customer Name: Geo News</p>
                    </div>
                    {/* Repeat the above structure for each item */}
                    <div className="border border-border rounded-lg p-4 bg-gray-100">
                        <div className="flex justify-between">
                            <p className="font-semibold">Token no. 08983421</p>
                            <p>Date: 23/12/2024</p>
                            <p>Time: 12:30</p>
                        </div>
                        <p className="mt-2 text-left">Customer Name: ARY News</p>
                    </div>
                    {/* Additional items */}
                </div>
            </div>


    </Layout>
  )
}

export default SuppressionLog
