import { createContext, useState, useEffect} from "react";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    var storedAuth = JSON.parse(localStorage.getItem('auth')) || {};
    const [auth, setAuth] = useState(storedAuth);

    var storedlastWindow = JSON.parse(localStorage.getItem('lastWindow')) || "/join-lesson";
    const [lastWindow, setlastWindow] = useState(storedlastWindow);

    useEffect(() => {
        localStorage.setItem('auth', JSON.stringify(auth));
    }, [auth]);

    useEffect(() => {
        localStorage.setItem('lastWindow', JSON.stringify(lastWindow));
    }, [lastWindow]);

    return(
        <AuthContext.Provider value = {{auth, setAuth, lastWindow, setlastWindow}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext