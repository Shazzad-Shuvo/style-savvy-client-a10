import auth from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState("light");

    const changeTheme = () => {
        const html = document.documentElement;

        if (mode == 'light') {
            html.classList.remove('light');
            html.classList.add('dark');
            setMode('dark');
            localStorage.setItem('mode', 'dark');
        }
        else{
            html.classList.remove('dark');
            html.classList.add('light');
            setMode('light');
            localStorage.setItem('mode', 'light');
        }
    };

    useEffect(()=>{
        const currentMode = localStorage.getItem('mode') || 'light';
        const html = document.documentElement;
        html.classList.add(currentMode);
        setMode(currentMode);


    }, [])

    const provider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user currently in currentUser: ', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unsubscribe();
        }
    }, []);

    const authInfo = { user, loading, mode, changeTheme, createUser, loginUser, googleSignIn, logOut };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;