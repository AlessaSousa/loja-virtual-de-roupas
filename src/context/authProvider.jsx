import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});

    // useEffect(() => {
    //     const userToken = localStorage.getItem("user_token");
    //     const userStorage = localStorage.getItem("users_db");

    //     if (userToken && userStorage) {
    //         const hasUser = JSON.parse(userStorage)?.filter(
    //             (user) => user.email === JSON.parse(userToken).email
    //         );

    //         if (hasUser) setUser(hasUser[0]);
    //     }
    // }, []);

    return ( 
        <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>
    )
};

export default AuthContext;