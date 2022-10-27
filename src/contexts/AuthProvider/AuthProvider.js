import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';

const auth = getAuth(app);

export const AuthCoontext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const createUser = async (email, password, name, photo) =>{
        await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        .then(data => {
            console.log(data);
        }).catch(error=> console.log(error))
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        });

        return unSubscribe();
    }, [])

    const authInfo = {user, providerLogin, logOut, createUser, signIn, setUser};

    return (
        <AuthCoontext.Provider value={authInfo}>
            {children}
        </AuthCoontext.Provider>
    );
};

export default AuthProvider;