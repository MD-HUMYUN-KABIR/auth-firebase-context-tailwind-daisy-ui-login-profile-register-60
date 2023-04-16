import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null) //have to export this value

const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);
//-----------------------
const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}
// ----------------------
const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}
// ---------------------
const logOut = () => {
   return signOut(auth)
}
// observe auth state change log in and sign in kora user k vibonno jaygay dekhabo
useEffect(()=> {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('auth state change' , currentUser);
        setUser(currentUser)
        setLoading(false)
    });
    return () => {
        unsubscribe();
    }
} , [])

// 
//-----------------------
const authInfo = {
    user, createUser, signIn, logOut, loading
}
// 
    return (
   <AuthContext.Provider value={authInfo}>
    {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;