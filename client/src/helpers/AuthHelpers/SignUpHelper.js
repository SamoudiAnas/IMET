import axios from 'axios';
import { API_URL } from '../../utils/apiUrl';

export const createNewUser = async (fullName, email, password) => {
	return await axios.post(
		API_URL,
		{
			query: `
        mutation{
          createUser(userInput:{fullName:"${fullName}",email:"${email}", password:"${password}",isAdmin:false}){
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
};
