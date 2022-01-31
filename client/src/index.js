import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//theme
import { ThemeProvider } from 'styled-components';
import { Default } from './themes/Default';

//contexts
import StatusProvider from './contexts/StatusContext';
import AuthProvider from './contexts/AuthContext';
import CreateUserProvider from './contexts/CreateUserContext';
import ProfileModalProvider from './contexts/ProfileModalContext';

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={Default}>
			<CreateUserProvider>
				<AuthProvider>
					<StatusProvider>
						<ProfileModalProvider>
							<App />
						</ProfileModalProvider>
					</StatusProvider>
				</AuthProvider>
			</CreateUserProvider>
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
