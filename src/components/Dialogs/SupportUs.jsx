import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '../../utils/DialogTitle';
import {
	Button,
	Dialog,
	DialogContent,
	DialogContentText,
	Typography,
	useMediaQuery,
	Box
} from '@material-ui/core';
import usePrepareLink from '../../utils/routing/usePrepareLink';
import { GET_PARAMS, GET_ENUMS } from '../../utils/routing/router';
import useGetParameter from '../../utils/routing/useGetParamater';
import Advertise from './Advertise';
import Auth from './Auth';

const useStyles = makeStyles((theme) => ({
	bold: {
		fontWeight: theme.typography.fontWeightBold
	},
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

function SupportUs({ isOpened, isAuthenticated }) {
	const styles = useStyles();
	const history = useHistory();
	const location = useLocation();
	const fullScreen = useMediaQuery((theme) => theme.breakpoints.down('xs'));

	const actionType = useGetParameter(GET_PARAMS.action);
	const [action, setAction] = useState(actionType);

	useEffect(() => {
		if (actionType) {
			setAction(actionType);
		} else setAction(null);
	}, [actionType]);

	const onClose = () => {
		goBack();
	};

	const goBack = useCallback(() => {
		history.push(location.pathname);
	}, [history, location.pathname]);

	const advertiseLink = usePrepareLink({
		query: {
			[GET_PARAMS.action]: GET_ENUMS.action.advertise
		},
		keepOldQuery: true
	});
	const authLink = usePrepareLink({
		query: {
			[GET_PARAMS.action]: GET_ENUMS.action.login
		},
		keepOldQuery: true
	});

	return (
		<>
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
							<Box component="li" data-icon="✏️">
								<Typography component="div">
									<Typography component="span" className={styles.bold}>
										Rate, review, tag and add.
									</Typography>{' '}
									Leave reviews and ratings for products you've bought, tag the stores
									you've bought them in, and add any missing products to the Guide.
									Together we can help the community at large easily find all the best
									vegan products.
									{!isAuthenticated && (
										<Box marginTop={2}>
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
							<Box component="li" data-icon="🗣">
								<Typography>
									<Typography component="span" className={styles.bold}>
										Mention us.
									</Typography>{' '}
									Recommend the Guide to your friends and family and show them how easy it
									is to find vegan products. A lot of people still do not realise that
									there are thousands of vegan products in the same supermarkets they
									already shop at. They may not even realise a lot of the products they
									currently purchase are already vegan. A quick browse of the Guide can
									open their eyes to how easy and convenient being vegan is in{' '}
									{new Date().getFullYear()}.
								</Typography>
							</Box>
							<Box component="li" data-icon="🎁">
								<Typography>
									<Typography component="span" className={styles.bold}>
										Share links.
									</Typography>{' '}
									If you see someone on social media asking about vegan products, or
									enquiring if a specific vegan product is any good, then post a link to
									the Guide. This will not only enable them to see the reviews other users
									have left for that specific product but could potentially introduce them
									to thousands of other new vegan products as well.
								</Typography>
							</Box>
							<Box component="li" data-icon="📈">
								<Typography component="div">
									<Typography component="span" className={styles.bold}>
										Advertise.
									</Typography>{' '}
									If you have a brand that would benefit from being exposed to visitors of
									the Guide then get in touch and let's start an advertising relationship.
									<Box marginTop={2}>
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
							<Box component="li" data-icon="❤️">
								<Typography component="div">
									<Typography component="span" className={styles.bold}>
										Become a patron.
									</Typography>{' '}
									Pledge a monthly amount you are comfortable with to help cover the
									expenses associated with creating and maintaining a large-scale web-app
									like this. Every little bit helps.
									<Box marginTop={2}>
										<Button
											variant="contained"
											color="primary"
											href="https://patreon.com/vomad"
											target="_blank"
											rel="noopener"
										>
											Support us via Patreon
										</Button>
									</Box>
								</Typography>
							</Box>
						</Box>
					</DialogContentText>
				</DialogContent>
			</Dialog>
			{action === 'advertise' && <Advertise isOpened />}
			{action === 'login' && <Auth isOpened />}z
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.isAuthenticated
	};
};

export default connect(mapStateToProps)(SupportUs);
