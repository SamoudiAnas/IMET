import React from 'react';

//homepage components
import Header from './HomeSections/Header';
import Struggles from './HomeSections/Struggles';
import NotifyMe from './HomeSections/NotifyMe';
import Solutions from './HomeSections/Solutions';
import Copyright from './HomeSections/Copyright';

//user modal
import UserProfileModal from '../components/UserProfileModal';

//user modal context
import {useProfileModalContext} from "../contexts/ProfileModalContext"

function Home() {
	const {isMyProfileModalOpen} = useProfileModalContext();
	
	return (
		<div>
			<Header />
			{isMyProfileModalOpen && <UserProfileModal />}
			<Struggles />
			<Solutions />
			<NotifyMe />
			<Copyright />
		</div>
	);
}

export default Home;
