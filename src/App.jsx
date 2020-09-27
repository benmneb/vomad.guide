import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConfirmProvider } from 'material-ui-confirm';
import {
	createMuiTheme,
	responsiveFontSizes,
	ThemeProvider
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from './components/AppBar/AppBar';
import ResultsList from './components/ResultsList/ResultsList';
import AddProducts from './components/Dialogs/AddProducts';
import Advertise from './components/Dialogs/Advertise';
import Privacy from './components/Dialogs/Privacy';
import Terms from './components/Dialogs/Terms';
import Feedback from './components/Dialogs/Feedback';
import Snackbars from './utils/Snackbars';
import Auth from './components/Dialogs/Auth';
import UserProfile from './components/Dialogs/UserProfile';
import Categories from './components/categories/Categories';
import PageNotFound from './components/categories/PageNotFound';
import SupportUs from './components/Dialogs/SupportUs';
import GetParameterPopups from './utils/routing/getParamaterPopups';
import AuthSuccess from './components/Dialogs/AuthSuccess';
import LoadingBar from './utils/LoadingBar';

let theme = createMuiTheme({
	palette: {
		primary: orange
	},
	mixins: {
		filtersPanel: {
			width: 395,
			'@media (max-width: 600px)': {
				width: '100vw'
			}
		},
		sideMenu: {
			width: 240
		}
	},
	typography: {
		button: {
			textTransform: 'none'
		}
	},
	overrides: {
		MuiButton: {
			containedPrimary: {
				color: 'white'
			}
		},
		MuiCssBaseline: {
			'@global': {
				html: {
					backgroundColor: '#fff'
				}
			}
		}
	},
	props: {
		MuiButton: {
			disableElevation: true
		}
	}
});

theme = responsiveFontSizes(theme);

const defaultOptions = {
	confirmationText: 'Confirm',
	confirmationButtonProps: { variant: 'contained' },
	cancellationButtonProps: { autoFocus: true }
};

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<ConfirmProvider defaultOptions={defaultOptions}>
				<CssBaseline />
				<LoadingBar />
				<AppBar>
					<Switch>
						<Route exact path="/">
							<Categories />
						</Route>
						<Route exact path="/auth/success">
							<AuthSuccess />
						</Route>
						<Route path="/:productType/:category">
							<ResultsList />
						</Route>
						<Route path="/:productType">
							<Categories />
						</Route>
						<Route>
							<PageNotFound />
						</Route>
					</Switch>
				</AppBar>
				<GetParameterPopups />
				<UserProfile />
				<AddProducts />
				<SupportUs />
				<Advertise />
				<Feedback />
				<Privacy />
				<Terms />
				<Auth />
				<Snackbars />
			</ConfirmProvider>
		</ThemeProvider>
	);
}
