import { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { userContext } from '../components/Layout';
import useAuth from './useAuth';

const useBillings = (user) => {

    const [allBillings, setAllBillings] = useState([]);
    const [billings, setBillings] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(null)


    // const { billings, isLoading, refetch } = useQuery(['billings'], async () => {
    //     const url = `${process.env.REACT_APP_API_URL}/billing-list`
    //     // console.log(url)

    //     const res = await fetch(url);
    //     const data = await res.json();
    //     return data;

    // })
    const getBillings = async () => {
        setLoading(true);
        const url = `${process.env.REACT_APP_API_URL}/billing-list`
        // console.log(url)

        const res = await fetch(url);
        const data = await res.json();
        setBillings(data);
        setAllBillings(data)
        setTotalPage(Math.ceil(data.length / 10))
        setLoading(false);
    }

    useEffect(() => {

        if (user) {

            getBillings();
        }
    }, [user])

    const updateAll = async () => {
        setLoading(true);
        const url = `${process.env.REACT_APP_API_URL}/billing-list`
        // console.log(url)

        const res = await fetch(url);
        const data = await res.json();

        setAllBillings(data)
        setLoading(false);

    }
    const refetch = async () => {
        setLoading(true);
        let url;
        if (page) {

            url = `${process.env.REACT_APP_API_URL}/billing-list?page=${page}`
        } else {
            url = `${process.env.REACT_APP_API_URL}/billing-list`

        }
        // console.log(url)

        const res = await fetch(url);
        const data = await res.json();
        setBillings(data)
        setLoading(false);
    }

    return { allBillings, billings, setBillings, loading, refetch, page, setPage, totalPage, updateAll }
}

export default useBillings;