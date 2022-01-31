import React, { useState, useContext, createContext } from 'react';

const CreateUserContext = createContext();

function CreateUserProvider({ children }) {
	const [ phone, setphone ] = useState('');
	const [ email, setemail ] = useState('');
	const [ website, setwebsite ] = useState('');
	const [ facebook, setfacebook ] = useState('');
	const [ twitter, settwitter ] = useState('');
	const [ instagram, setinstagram ] = useState('');
	const [ snapshat, setsnapshat ] = useState('');
	const [ discord, setDiscord ] = useState('');
	const [ whatsapp, setwhatsapp ] = useState('');

	const values = {
		phone,
		setphone,
		email,
		setemail,
		website,
		setwebsite,
		facebook,
		setfacebook,
		twitter,
		settwitter,
		instagram,
		setinstagram,
		snapshat,
		setsnapshat,
		discord,
		setDiscord,
		whatsapp,
		setwhatsapp
	};

	return <CreateUserContext.Provider value={values}>{children}</CreateUserContext.Provider>;
}

export default CreateUserProvider;

export const useCreateUserContext = () => {
	return useContext(CreateUserContext);
};
