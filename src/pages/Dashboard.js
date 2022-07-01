import React, { useContext, useEffect, useState } from 'react';
import BillingForm from '../components/BillingForm';
import BillingsTable from '../components/BillingsTable';
import Loader from '../components/Loader';
import useBillings from '../hooks/useBillings';
import axios from 'axios';
import { toast } from 'react-toastify'
import { billingContext, userContext } from '../components/Layout';

const Dashboard = () => {

    const [selectedBill, setSelectedBill] = useState({});
    // const { billings, setBillings, loading, refetch } = useBillings()
    const { allBillings, billings, setBillings, loading, refetch, page, setPage, totalPage,updateAll } = useContext(billingContext)

    useEffect(() => {
       
        const getBillings = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/billing-list?page=${page}`);
            const { data } = res;
            // console.log(data)
            setBillings(data);
            refetch()

            
        }
        getBillings();

    }, [page])

    const handleDelete = async () => {

        const updating = toast.loading("Deleting..");

        const url = `${process.env.REACT_APP_API_URL}/delete-billing/${selectedBill._id}`;
        // console.log(url)

        const res = await axios.delete(url);
        // console.log(res);
        if (res.data.deletedCount) {
            setSelectedBill(null);
            refetch();
            updateAll();
            toast.update(updating, {
                render: "Deleted", type: "success", isLoading: false, autoClose: 3000,
                hideProgressBar: false
            })
        }

    }

    const handleSearch = (e) => {
        const txt = e.target.value.toLowerCase();
        if (txt) {
            const newBillings = allBillings.filter(bill => bill.fullName.toLowerCase().includes(txt) || bill.email.toLowerCase().includes(txt) || bill.phone.includes(txt));
            setBillings(newBillings);
        } else {
            refetch()
        }
    }

    return (
        <div className="">
            <div className="dahboard-top flex flex-col md:flex-row gap-y-2 justify-between items-center p-2 border border-primary my-5">
                <div>
                    <div className="flex items-center gap-x-4">
                        <h4 className="font-semibold">Billing</h4>
                        <input onChange={handleSearch} type="text" className="py-1 px-4 border border-gray-300 rounded-none w-full focus:outline-none" placeholder="Search by full name/email/phone" />
                    </div>
                </div>

                <label onClick={() => setSelectedBill("")} htmlFor="my-modal-4" className="btn btn-sm">
                    Add New Bill
                </label>
            </div>


            <div className="billing-table pb-8">

                <BillingsTable billings={billings} setSelectedBill={setSelectedBill} />

            </div>
            <div className="pagination pb-10">
                <div className="flex gap-2 justify-center">
                    <button onClick={() => setPage(page-1)} className={`btn  rounded-none px-3 btn-xs ${page == 0 && 'btn-disabled'}`}> {`<`} </button>
                    {
                        [...Array(totalPage).keys()].map(x =>

                            <span key={x} className={`btn-xs rounded-none btn ${page === x && 'bg-secondary text-white'}`} onClick={() => setPage(x)}>{x + 1}</span>

                        )
                    }
                    <button onClick={() => setPage(page+1)} className={`btn  rounded-none px-3 btn-xs ${page+1 == totalPage && 'btn-disabled'}`}> {`>`} </button>
                </div>
            </div>



            {
                selectedBill !== null &&

                <div>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <label htmlFor="my-modal-4" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <BillingForm
                                billings={billings}
                                setBillings={setBillings}
                                refetch={refetch}
                                bill={selectedBill}
                                setBill={setSelectedBill}
                                updateAll={updateAll}
                                
                                />

                        </label>
                    </label>
                </div>
            }
            {
                selectedBill !== null &&

                <>

                    <input type="checkbox" id="delete-modal" className="modal-toggle" />
                    <label htmlFor="delete-modal" className="modal cursor-pointer">
                        <label className="modal-box relative" htmlFor="">
                            <h3 className="text-lg my-4 text-red-600">Are You sure Want to delete it?</h3>
                            <button className="btn-danger btn btn-sm" onClick={handleDelete}>Yes</button>
                        </label>
                    </label>
                </>


            }


        </div >
    );
};

export default Dashboard;