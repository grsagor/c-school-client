import React, { createContext } from 'react';

export const AuthCoontext = createContext();

const AuthProvider = ({children}) => {
    const user = {displayName: 'sagor'};
    const authInfo = {user};
    return (
        <AuthCoontext.Provider value={authInfo}>
            {children}
        </AuthCoontext.Provider>
    );
};

export default AuthProvider;