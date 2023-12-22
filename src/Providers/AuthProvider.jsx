import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import axios from "axios";


export const AuthContext = createContext([]);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user 
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login 
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // log out 
    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email;
            const currentEmail = {email: userEmail};
            setLoading(false);
            setUser(currentUser);
            console.log('Observing of user', currentUser);
            
            if(currentUser){
                axios.post( 'http://localhost:5000/jwt', currentEmail, {withCredentials: true})
                .then(res => {
                    console.log('token', res.data);
                })
            }
            else{
                axios.post('http://localhost:5000/logOut', logInUser, {
                    withCredentials: true,
                })
                .then(res => {
                    console.log(res.data);
                })
            }
        })
    }, [])

    const authInfo = {createUser, logInUser, googleLogIn, loading, user, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;