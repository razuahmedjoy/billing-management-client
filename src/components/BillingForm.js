import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify'
const BillingForm = ({ billings, setBillings, bill, setBill, refetch ,updateAll}) => {

    const handleSubmit = async (e) => {

        const updating = toast.loading("Updating..")

        e.preventDefault();

        if (bill._id) {

            // update bills

            const { _id, fullName, email, phone, amount } = bill
            const url = `${process.env.REACT_APP_API_URL}/update-billing/${_id}`;
            const data = { fullName, email, phone, amount };

            const res = await axios.put(url, data);
            // console.log(res);
            if (res.data.modifiedCount) {
                setBill(null);
                updateAll();
                refetch();

                toast.update(updating, {
                    render: "Updated", type: "success", isLoading: false, autoClose: 3000,
                    hideProgressBar: false
                })
            }
            else {
                setBill(null);
                refetch();
            }





        } else {
            setBillings([ bill,...billings,]);
            console.log(billings)
            // add new bills
            const url = `${process.env.REACT_APP_API_URL}/add-billing`;

            const res = await axios.post(url, bill);

            if (res.data.inserted.insertedId) {
                setBill(null);
                updateAll();
                refetch();

                toast.update(updating, {
                    render: "Updated", type: "success", isLoading: false, autoClose: 3000,
                    hideProgressBar: false
                })
            } else {
                setBill(null);
                refetch();
            }


        }


    }

    const handleChange = e => {

        const key = e.target.name;
        const value = e.target.value;

        const newItem = { ...bill }
        newItem[key] = value;
        setBill(newItem);




    }


    return (
        <div>
            <form className="flex w-full flex-col gap-y-2" onSubmit={handleSubmit}>
                <h2 className="text-center py-3">Add New bill</h2>
                <input onChange={handleChange} value={bill?.fullName || ""} required placeholder="Full Name" name="fullName" type="text" className="input w-full input-md border border-gray-300 focus:outline-none" />


                <input onChange={handleChange} required value={bill?.email || ""} placeholder="Email" name="email" type="email" className="input w-full input-md border border-gray-300 focus:outline-none" />



                <input onChange={handleChange} required maxLength={11} minLength={11} value={bill?.phone || ""} name="phone" placeholder="Phone Number" type="tel" className="input w-full input-md border border-gray-300 focus:outline-none" />



                <input onChange={handleChange} required value={bill?.amount || ""} placeholder="Amount" name="amount" type="number" className="input w-full input-md border border-gray-300 focus:outline-none" />


                <button className="btn btn-md" type="submit">Submit</button>
            </form>
            {/* <form className="flex w-full flex-col gap-y-2" onSubmit={handleSubmit}>
                <h2 className="text-center py-3">Add New bill</h2>
                <input value={bill?.fullName || ""} placeholder="Full Name" type="text" className="input w-full input-md border border-gray-300 focus:outline-none" {...register("fullName", { required: true })} />

                {errors.fullName?.type === 'required' && <ErrorText>Name Required</ErrorText>}

                <input value={bill?.email || ""} placeholder="Email" type="email" className="input w-full input-md border border-gray-300 focus:outline-none" {...register("email", { required: true })} />

                {errors.email?.type === 'required' && <ErrorText>Email Required</ErrorText>}

                <input value={bill?.phone || ""} placeholder="Phone Number" type="number" className="input w-full input-md border border-gray-300 focus:outline-none" {...register("phone", { required: true, minLength: 11, maxLength: 11 })} />

                {errors.phone?.type === 'required' && <ErrorText>Phone Required</ErrorText>}
                {errors.phone?.type === 'minLength' && <ErrorText>Must be 11 Digits</ErrorText>}
                {errors.phone?.type === 'maxLength' && <ErrorText>Must be 11 Digits</ErrorText>}

                <input value={bill?.amount || ""} placeholder="Amount" type="number" className="input w-full input-md border border-gray-300 focus:outline-none" {...register("amount", { required: true })} />

                {errors.amount?.type === 'required' && <ErrorText>Amount is Required</ErrorText>}

                <button className="btn btn-md" type="submit">Submit</button>
            </form> */}
        </div>
    );
};

export default BillingForm;