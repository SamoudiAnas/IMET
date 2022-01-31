import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

//components
import Navbar from '../components/Navbar';
import Copyright from './HomeSections/Copyright';

//images
import ContactBg from '../assets/contact_bg.svg';
import { ReactComponent as EmailIcon } from '../assets/email.svg';
import { ReactComponent as AddressIcon } from '../assets/address.svg';
import { ReactComponent as PhoneIcon } from '../assets/phone.svg';
import { useStatusContext } from '../contexts/StatusContext';
import { Failed, Sending, Succeeded } from '../utils/StatusInfos';
import axios from 'axios';

function Contact() {
	//input data
	const [ fullName, setFullName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ message, setMessage ] = useState('');

	//context
	const { setIsStatusShown, setStatusInfo } = useStatusContext();

	const handleContact = async (e) => {
		e.preventDefault();

		//if some input is empty
		if (email.trim() === '' || message.trim() === '') {
			setStatusInfo({
				...Failed,
				message: 'Please fill in the form before submitting!'
			});
			setIsStatusShown(true);
			return;
		}

		try {
			//show the status modal
			setStatusInfo(Sending);
			setIsStatusShown(true);

			//send to the server
			let result = await axios.post(
				'http://vin-anna.com/server/graphql',
				{
					query: `
                mutation{
                  createMessage(messageInput:{fullName:"${fullName}",email:"${email}", message:"${message}"}){
                    _id
                  }
                }
      `
				},
				{
					headers: {
						'Content-Type': 'application/json'
					}
				}
			);
			if (!result.ok) {
				//show the status modal
				setStatusInfo(Failed);
				setIsStatusShown(true);
			}

			if (result.status === 200) {
				//show the status modal
				setStatusInfo(Succeeded);
				setIsStatusShown(true);
			}
		} catch (err) {
			//show the status modal
			setStatusInfo(Failed);
			setIsStatusShown(true);
		}
	};
	useEffect(() => {
		setIsStatusShown(false);
	}, []);

	return (
		<Wrapper>
			<div className="page_title_container">
				<div className="container">
					<Navbar />
				</div>
				<div className="container">
					<h1>CONTACT US</h1>
					<p>
						Message us, whether you are interested in knowing more about our <br />
						product offerings or you would like to join our team.
					</p>
				</div>
			</div>

			<div className="container contact_section">
				<div className="contact_info">
					<h1>Contact Info</h1>
					<div className="info">
						<div className="info_icon">
							<PhoneIcon />
						</div>
						<div>
							<p className="info_title">Phone Number</p>
							<h3 className="info_description">+44 07436603247</h3>
						</div>
					</div>
					<div className="info">
						<div className="info_icon">
							<AddressIcon />
						</div>
						<div>
							<p className="info_title">Address</p>
							<h3 className="info_description">Lafrowda Cottage, Prince of Wales Road, EX4 4PR</h3>
						</div>
					</div>
					<div className="info">
						<div className="info_icon">
							<EmailIcon />
						</div>
						<div>
							<p className="info_title">Email</p>
							<h3 className="info_description">contact@vin-anna.com</h3>
						</div>
					</div>
				</div>
				<div className="contact_form">
					<h1>Please get in touch for further details</h1>
					<form action="">
						<label>Name</label>
						<input
							type="text"
							placeholder="Please enter your name"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
						/>
						<label>Email</label>
						<input
							type="email"
							placeholder="Please enter your email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<label>Message</label>
						<textarea
							type="text"
							rows="10"
							placeholder="Your message ..."
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
						<button onClick={handleContact}>Submit</button>
					</form>
				</div>
			</div>

			<Copyright />
		</Wrapper>
	);
}

export default Contact;

const Wrapper = styled.div`
  .page_title_container {
    background-image: url("${ContactBg}");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding: 3rem 1rem 8rem;
    margin-bottom: 4rem;

    h1 {
      color: white;

      font-size: 2.5rem;
    }

    p {
      color: white;
    }
  }

  .contact_section {
    padding: 0 2rem;
    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 2fr 5fr;
      gap: 4rem;
      padding: 0;
    }
  }

  .contact_form {
    padding: 2rem;
    @media screen and (min-width: 768px) {
      padding: 4rem;
    }
    margin-bottom: 4rem;
    border: 1px solid ${(props) => props.theme.secondary};
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
      rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    h1 {
      color: ${(props) => props.theme.primary};
      margin-bottom: 2rem;
    }

    label {
      font-weight: 500;
    }

    input,
    textarea {
      width: 100%;
      margin: 0.5rem 0 1rem;
      padding: 1rem 1.5rem;
      border: 1px solid ${(props) => props.theme.primary};

      &:focus {
        border: 2px solid ${(props) => props.theme.primary};
      }
    }

    button {
      margin: 0.5rem 0 1rem;
      padding: 1rem 2.5rem;
      font-size: 1rem;
      border: transparent;
      color: white;
      background-color: ${(props) => props.theme.primary};

      &:hover {
        cursor: pointer;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
          rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
      }
    }
  }

  .contact_info {
    padding-top: 4rem;

    h1 {
      color: ${(props) => props.theme.primary};
      margin-bottom: 2rem;
    }
  }

  .info {
    display: grid;
    grid-template-columns: 1fr 3fr;

    gap: 1rem;
    margin-bottom: 3rem;
  }

  .info_icon {
    fill: white;
    background-color: ${(props) => props.theme.secondary};
    padding: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    border: 1px solid ${(props) => props.theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .info_title {
  }

  .info_description {
    color: ${(props) => props.theme.secondary};
    font-size: 0.9rem;
  }
`;
