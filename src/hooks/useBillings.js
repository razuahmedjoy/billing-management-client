import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useBillings = () => {

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

    useEffect(() => {
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

        getBillings();
    }, [])

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
        setBillings(data);
        setAllBillings(data)
        setLoading(false);
    }
    return { allBillings, billings, setBillings, loading, refetch, page, setPage, totalPage }
}

export default useBillings;