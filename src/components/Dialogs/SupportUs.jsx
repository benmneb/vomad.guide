import {
	Box,
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	Typography,
	useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import DialogTitle from '../../utils/DialogTitle';
import {
	getEnums,
	getParams,
	useGetParameter,
	usePrepareLink
} from '../../utils/routing';
import Advertise from './Advertise';
import Auth from './Auth';
import Invest from './Invest';

const useStyles = makeStyles((theme) => ({
	list: {
		margin: 0,
		padding: 0,
		listStyle: 'none',
		display: 'grid',
		gridGap: '1rem',
		'& li': {
			display: 'grid',
			gridTemplateColumns: '0 1fr',
			gridGap: '1.75em',
			alignItems: 'start',
			fontSize: '1.5rem',
			lineHeight: '1.25'
		},
		'& li::before': {
			content: 'attr(data-icon)'
		}
	}
}));

export default function SupportUs({ isOpened }) {
	const styles = useStyles();
	const history = useHistory();
	const location = useLocation();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const fullScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	const actionType = useGetParameter(getParams.action);
	const [action, setAction] = useState(actionType);

	useEffect(() => {
		if (actionType) {
			setAction(actionType);
		} else setAction(null);
	}, [actionType]);

	const onClose = () => {
		if (isOpened) {
			goBack();
		}
	};

	const goBack = useCallback(() => {
		history.push(location.pathname);
	}, [history, location.pathname]);

	const advertiseLink = usePrepareLink({
		query: {
			[getParams.action]: getEnums.action.advertise
		},
		keepOldQuery: true
	});
	const investorsLink = usePrepareLink({
		query: {
			[getParams.action]: getEnums.action.invest
		},
		keepOldQuery: true
	});
	const authLink = usePrepareLink({
		query: {
			[getParams.action]: getEnums.action.login
		},
		keepOldQuery: true
	});

	return (
		<Dialog
			open={Boolean(isOpened)}
			onClose={onClose}
			aria-labelledby="support-dialog-title"
			aria-describedby="support-dialog-description"
			fullScreen={fullScreen}
		>
			<DialogTitle id="support-dialog-title" onClose={onClose}>
				{'Support the Guide'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText component="article" id="support-dialog-description">
					<Typography paragraph>
						If you get any value from the Guide there are a number of ways you can give
						value back.
					</Typography>
					<Box component="ul" className={styles.list}>
						<Box component="li" data-icon="💰">
							<Typography component="div">
								<Box component="span" fontWeight="fontWeightBold">
									Invest.
								</Box>{' '}
								Like what you see? It's just the beginning. With generous funding we can
								scale globally and implement the numerous game-changing features we have
								planned.
								<Box marginTop={1.5}>
									<Button
										variant="contained"
										color="primary"
										component={Link}
										to={investorsLink}
									>
										Get in touch
									</Button>
								</Box>
							</Typography>
						</Box>
						<Box component="li" data-icon="❤️">
							<Typography component="div">
								<Box component="span" fontWeight="fontWeightBold">
									Become a patron.
								</Box>{' '}
								Pledge an amount you are comfortable with to help cover the expenses
								associated with creating and maintaining a large-scale web-app like this.
								Every little bit helps.
								<Box marginTop={1.5}>
									<Button
										variant="contained"
										color="primary"
										href="https://patreon.com/vomad?fan_landing=true"
										target="_blank"
										rel="noopener noreferrer"
									>
										Support us via Patreon
									</Button>
								</Box>
							</Typography>
						</Box>
						<Box component="li" data-icon="📈">
							<Typography component="div">
								<Box component="span" fontWeight="fontWeightBold">
									Advertise.
								</Box>{' '}
								If you have a brand that would benefit from being exposed to visitors of
								the Guide then get in touch and let's start an advertising relationship.
								<Box marginTop={1.5}>
									<Button
										variant="contained"
										color="primary"
										component={Link}
										to={advertiseLink}
									>
										Advertise
									</Button>
								</Box>
							</Typography>
						</Box>
						<Box component="li" data-icon="🎁">
							<Typography>
								<Box component="span" fontWeight="fontWeightBold">
									Share links.
								</Box>{' '}
								If you see someone on social media asking about vegan products, or
								enquiring if a specific vegan product is any good, then post a link to the
								Guide.
							</Typography>
						</Box>
						<Box component="li" data-icon="🗣">
							<Typography>
								<Box component="span" fontWeight="fontWeightBold">
									Mention us.
								</Box>{' '}
								Recommend the Guide to your friends and family. Show them how easy it is
								to find vegan products. A quick browse of the Guide can open their eyes to
								how convenient being vegan is in {new Date().getFullYear()}.
							</Typography>
						</Box>
						<Box component="li" data-icon="✏️">
							<Typography component="div">
								<Box component="span" fontWeight="fontWeightBold">
									Rate, review, tag and add.
								</Box>{' '}
								Leave reviews and ratings for products you've bought, tag the stores
								you've bought them in, and add any missing products so others can find
								them. The easiest way to support the Guide is just to use it.
								{!isAuthenticated && (
									<Box marginTop={1.5}>
										<Button
											variant="contained"
											color="primary"
											component={Link}
											to={authLink}
										>
											Get Started
										</Button>
									</Box>
								)}
							</Typography>
						</Box>
					</Box>
				</DialogContentText>
			</DialogContent>
			<Advertise isOpened={action === 'advertise'} />
			<Invest isOpened={action === 'invest'} />
			<Auth isOpened={action === 'login'} />
		</Dialog>
	);
}
