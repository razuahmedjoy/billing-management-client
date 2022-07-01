import { useEffect, useState } from 'react';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const localUserData = localStorage.getItem("billingUser");
        if (localUserData) {
            // do something
            setUser(JSON.parse(localUserData));
        }
        setLoading(false);
    }, [])

    return {user,setUser,loading,setLoading}

};

export default useAuth;