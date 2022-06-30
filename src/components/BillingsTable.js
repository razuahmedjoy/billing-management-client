import React from 'react';
import Loader from './Loader';

const BillingsTable = ({billings,isLoading,setSelectedBill}) => {



    

    return (
        <>

            {
                billings &&
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                              
                                <td>Billing Id</td>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Paid Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                billings?.slice(0,10).map((billing,index) =>
                                    <tr key={billing?._id}>
                             
                                        <td className={`border font-bold border-gray-300 ${!billing._id && `loading btn w-full`}`}>{billing._id || "Loading"}</td>
                                        <td>{billing.fullName}</td>
                                        <td>{billing.email}</td>
                                        <td>{billing.phone}</td>
                                        <td>${billing.amount}</td>
                                        <td className="flex gap-x-4">
                                            <label htmlFor="my-modal-4" onClick={()=>setSelectedBill(billing)} className="btn btn-xs">Edit</label>
                                            <label htmlFor="delete-modal" onClick={()=>setSelectedBill(billing)} className="btn btn-xs">Delete</label>
                                        </td>
                                    </tr>
                                )
                            }




                        </tbody>
                    </table>
                </div>
            }

        </>
    );
};

export default BillingsTable;