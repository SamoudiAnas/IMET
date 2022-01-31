import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//icons
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone_icon.svg';
import { ReactComponent as EmailIcon } from '../assets/email_icon.svg';
import { ReactComponent as WebsiteIcon } from '../assets/website_icon.svg';
import { ReactComponent as TwitterIcon } from '../assets/twitter_icon.svg';
import { ReactComponent as InstagramIcon } from '../assets/instagram_icon.svg';
import { ReactComponent as SnapshatIcon } from '../assets/snapshat_icon.svg';
import { ReactComponent as DiscordIcon } from '../assets/discord_icon.svg';
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp_icon.svg';
import CheckmarkIcon from '../assets/checkmark_icon.svg';
import { useCreateUserContext } from '../contexts/CreateUserContext';

function SocialHandleSetup() {
	//get inputs from context
	const {
		setphone,
		setemail,
		setwebsite,
		setfacebook,
		settwitter,
		setinstagram,
		setsnapshat,
		setDiscord,
		setwhatsapp
	} = useCreateUserContext();

	//check if inputs are set
	const [ isPhoneSet, setIsPhoneSet ] = useState(false);
	const [ isEmailSet, setIsEmailSet ] = useState(false);
	const [ isWebsiteSet, setIsWebsiteSet ] = useState(false);
	const [ isFacebookSet, setIsFacebookSet ] = useState(false);
	const [ isTwitterSet, setIsTwitterSet ] = useState(false);
	const [ isInstagramSet, setIsInstagramSet ] = useState(false);
	const [ isSnapshotSet, setIsSnapshotSet ] = useState(false);
	const [ isDiscordSet, setIsDiscordSet ] = useState(false);
	const [ isWhatsappSet, setIsWhatsappSet ] = useState(false);

	//text in the input
	const [ inputText, setinputText ] = useState('Please enter your phone number');

	//selectedInput
	const [ selected, setSelected ] = useState('phone');

	const setData = (e) => {
		switch (selected) {
			case 'phone':
				setIsPhoneSet(true);
				break;

			case 'email':
				setIsEmailSet(true);
				break;

			case 'website':
				setIsWebsiteSet(true);
				break;

			case 'facebook':
				setIsFacebookSet(true);
				break;

			case 'twitter':
				setIsTwitterSet(true);
				break;

			case 'instagram':
				setIsInstagramSet(true);
				break;

			case 'snapshat':
				setIsSnapshotSet(true);
				break;

			case 'discord':
				setIsDiscordSet(true);
				break;

			case 'whatsapp':
				setIsWhatsappSet(true);
				break;

			default:
				return;
		}
	};

	useEffect(
		() => {
			switch (selected) {
				case 'phone':
					setinputText('Please enter your phone number');

					break;

				case 'email':
					setinputText('Please enter your email address');

					break;

				case 'website':
					setinputText('Please enter your website link');

					break;

				case 'facebook':
					setinputText('Please enter your facebook profile');

					break;

				case 'twitter':
					setinputText('Please enter your twitter profile');
					break;

				case 'instagram':
					setinputText('Please enter your instagram profile');
					break;

				case 'snapshat':
					setinputText('Please enter your snapshat profile');
					break;

				case 'discord':
					setinputText('Please enter your discord profile');
					break;

				case 'whatsapp':
					setinputText('Please enter your whatsapp profile');
					break;

				default:
					return;
			}
		},
		[ selected ]
	);

	const setInputData = (e) => {
		switch (selected) {
			case 'phone':
				setphone(e.target.value);
				break;

			case 'email':
				setemail(e.target.value);
				break;

			case 'website':
				setwebsite(e.target.value);
				break;

			case 'facebook':
				setfacebook(e.target.value);
				break;

			case 'twitter':
				settwitter(e.target.value);
				break;

			case 'instagram':
				setinstagram(e.target.value);
				break;

			case 'snapshat':
				setsnapshat(e.target.value);
				break;

			case 'discord':
				setDiscord(e.target.value);
				break;

			case 'whatsapp':
				setwhatsapp(e.target.value);
				break;

			default:
				return;
		}
	};

	return (
		<Wrapper className="container">
			<div className="profile_inputs">
				<h2>SOCIAL MEDIA HANDLES</h2>
				<input type="text" placeholder={inputText} onChange={(e) => setInputData(e)} />
				<button onClick={(e) => setData(e)}>Submit</button>
			</div>

			<div className="social_icons_container">
				<div className="social_icons">
					<div className={` ${isPhoneSet ? 'is_set' : ''}`}>
						<PhoneIcon
							className={`icon  ${selected === 'phone' ? 'is_selected' : ''} ${isPhoneSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('phone')}
						/>
					</div>
					<div className={` ${isEmailSet ? 'is_set' : ''}`}>
						<EmailIcon
							className={`icon  ${selected === 'email' ? 'is_selected' : ''} ${isEmailSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('email')}
						/>
					</div>

					<div className={` ${isWebsiteSet ? 'is_set' : ''}`}>
						<WebsiteIcon
							className={`icon  ${selected === 'website' ? 'is_selected' : ''} ${isWebsiteSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('website')}
						/>
					</div>

					<div className={` ${isFacebookSet ? 'is_set' : ''}`}>
						<FacebookIcon
							className={`icon  ${selected === 'facebook' ? 'is_selected' : ''} ${isFacebookSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('facebook')}
						/>
					</div>

					<div className={` ${isTwitterSet ? 'is_set' : ''}`}>
						<TwitterIcon
							className={`icon  ${selected === 'twitter' ? 'is_selected' : ''} ${isTwitterSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('twitter')}
						/>
					</div>

					<div className={` ${isInstagramSet ? 'is_set' : ''}`}>
						<InstagramIcon
							className={`icon  ${selected === 'instagram' ? 'is_selected' : ''} ${isInstagramSet
								? 'is_selected'
								: ''}`}
							onClick={(e) => setSelected('instagram')}
						/>
					</div>

					<div className={` ${isSnapshotSet ? 'is_set' : ''}`}>
						<SnapshatIcon
							className={`icon  ${selected === 'snapshat' ? 'is_selected' : ''}  ${isSnapshotSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('snapshat')}
						/>
					</div>

					<div className={` ${isDiscordSet ? 'is_set' : ''}`}>
						<DiscordIcon
							className={`icon  ${selected === 'discord' ? 'is_selected' : ''}  ${isDiscordSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('discord')}
						/>
					</div>

					<div className={` ${isWhatsappSet ? 'is_set' : ''}`}>
						<WhatsappIcon
							className={`icon  ${selected === 'whatsapp' ? 'is_selected' : ''}  ${isWhatsappSet ? 'is_selected' : ''}`}
							onClick={(e) => setSelected('whatsapp')}
						/>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

export default SocialHandleSetup;

const Wrapper = styled.div`
	padding: 2rem;

	h2 {
		color: ${(props) => props.theme.primary};
		margin-bottom: 1rem;
	}

	@media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
	}

	.social_icons_container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.social_icons {
		display: grid;
		grid-template-columns: 4rem 4rem 4rem;
		gap: 1rem 1.5rem;
	}

	.icon {
		width: 4.5rem;
		height: 4.5rem;
		padding: 1rem;
		cursor: pointer;
		border-radius: 0.5rem;
		border: 2px solid ${(props) => props.theme.secondary};
		fill: ${(props) => props.theme.secondary};
		transition: all 0.1s ease;
		&:hover {
			padding: 0.85rem;
		}
	}

	.is_selected {
		border: 4px solid ${(props) => props.theme.primary};
		fill: ${(props) => props.theme.primary};
		position: relative;
	}

	.is_set {
		pointer-events: none;
		position: relative;
		&::before {
			content: "";
			background-image: url(${CheckmarkIcon});
			position: absolute;
			top: -.6rem;
			right: -1.2rem;
			width: 1.75rem;
			height: 1.75rem;
			z-index: 999;
		}
	}

	button {
		margin: 0.5rem 0 1rem;
		padding: 1rem 2.5rem;
		font-size: 1rem;
		width: 100%;
		border: transparent;
		color: white;
		background-color: ${(props) => props.theme.primary};

		&:hover {
			cursor: pointer;
			box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
		}
	}
`;
