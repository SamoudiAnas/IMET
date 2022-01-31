import React, { useState, useEffect, useContext, createContext } from 'react';
import { getUserData } from '../helpers/AuthHelpers/GetUserData';

const AuthContext = createContext();

function AuthProvider({ children }) {
	const [ isLoggedIn, setisLoggedIn ] = useState(false);
	const [ token, setToken ] = useState(localStorage.getItem('token'));
	const [ currentUser, setCurrentUser ] = useState(null);

	useEffect(() => {
		const tempToken = localStorage.getItem('token');
		if (tempToken !== '' && tempToken !== undefined && tempToken !== null) {
			setToken(tempToken);
		}
	}, []);

	useEffect(
		() => {
			if (token) {
				getUserData(token, setCurrentUser);
				
			}
		},
		[ token ]
	);

	const values = {
		isLoggedIn,
		setisLoggedIn,
		token,
		setToken,
		currentUser,
		setCurrentUser
	};

	return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

export const useAuthContext = () => {
	return useContext(AuthContext);
};
