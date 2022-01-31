import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';

export const login = async (email, password) => {
	return await axios.post(
		API_URL,
		{
			query: `
        query{
          login(email:"${email}", password:"${password}"){
            userId
            token
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
};
