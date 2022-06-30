import React from 'react';

const Dashboard = () => {

    

    return (
        <div className="">
            <div className="dahboard-top flex flex-col md:flex-row gap-y-2 justify-between items-center p-2 border border-primary my-5">
                <div>
                    <div className="flex items-center gap-x-4">
                        <h4 className="font-semibold">Billing</h4>
                        <input type="text" className="py-1 px-4 border border-gray-300 rounded-none max-w-sm focus:outline-none" placeholder="Search" />
                    </div>
                </div>

                <button className="btn btn-sm">
                    Add New Bill
                </button>
            </div>


            <div className="billing-table">
                <div class="overflow-x-auto">
                    <table class="table table-zebra w-full">
                     
                        <thead>
                            <tr>
                                <th>Billing Id</th>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Paid Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                                <th className="border border-gray-300">123456798</th>
                                <td>Cy Ganderton</td>
                                <td>email@gmail.com</td>
                                <td>01215645656</td>
                                <td>450</td>
                                <td className="flex gap-x-4">
                                    <button className="btn btn-xs">Edit</button>
                                    <button className="btn btn-xs">Delete</button>
                                </td>
                            </tr>
                         
                          
                            <tr>
                                <th className="border border-gray-300">123456798</th>
                                <td>Cy Ganderton</td>
                                <td>email@gmail.com</td>
                                <td>01215645656</td>
                                <td>450</td>
                                <td className="flex gap-x-4">
                                    <button className="btn btn-xs">Edit</button>
                                    <button className="btn btn-xs">Delete</button>
                                </td>
                            </tr>
                         
                          
                            <tr>
                                <th className="border border-gray-300">123456798</th>
                                <td>Cy Ganderton</td>
                                <td>email@gmail.com</td>
                                <td>01215645656</td>
                                <td>450</td>
                                <td className="flex gap-x-4">
                                    <button className="btn btn-xs">Edit</button>
                                    <button className="btn btn-xs">Delete</button>
                                </td>
                            </tr>
                         
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;