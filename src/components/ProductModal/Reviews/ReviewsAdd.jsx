import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { showSnackbar } from '../../../store/actions';
import clsx from 'clsx';
import { Typography, TextField, Grid, Box } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { labels } from '../../../assets/ratingLabels';
import LoadingButton from '../../../utils/LoadingButton';

const useStyles = makeStyles((theme) => ({
	container: {
		[theme.breakpoints.up('sm')]: {
			width: 651
		}
	},
	ratingError: {
		fontWeight: theme.typography.fontWeightBold,
		color: theme.palette.error.main
	}
}));

export default function ReviewsAdd({ ratingBeforeClickedAddReviewSnackbar, ...props }) {
	const styles = useStyles();
	const dispatch = useDispatch();
	const currentUserData = useSelector((state) => state.currentUserData);
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(-1);
	const [ratingError, setRatingError] = useState(false);
	const [pending, setPending] = useState(false);

	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data) => {
		if (rating > 0) {
			setPending(true);
			axios
				.post('https://api.vomad.guide/review/', {
					review: data.review,
					product_id: props.productId,
					user_id: currentUserData.id,
					rating: rating
				})
				.then(() => {
					setPending(false);
					dispatch(
						showSnackbar({
							snackData: {
								type: 'success',
								title: 'Review added',
								message: 'Thank you for helping people find vegan products easier',
								emoji: '💪'
							}
						})
					);
					props.hide();
				})
				.then(() => props.updateReviews())
				.catch((err) => {
					setPending(false);
					if (err.response.data === 'user already reviewed') {
						return dispatch(
							showSnackbar({
								snackData: {
									type: 'error',
									title: "Can't leave two reviews",
									message: 'You have already reviewed this product.'
								}
							})
						);
					}
					dispatch(
						showSnackbar({
							snackData: {
								type: 'error',
								title: 'Could not add review',
								message: `${err.message}. TODO:`
							}
						})
					);
				});
		} else {
			setRatingError(true);
		}
	};

	useEffect(() => {
		if (
			ratingBeforeClickedAddReviewSnackbar &&
			rating !== ratingBeforeClickedAddReviewSnackbar
		) {
			setRating(ratingBeforeClickedAddReviewSnackbar);
		}
	}, [ratingBeforeClickedAddReviewSnackbar, rating]);

	let ratingHelperText;

	if ((rating === 0 && hover === -1) || (rating === null && hover === -1)) {
		ratingHelperText = (
			<Typography
				component="span"
				className={clsx({ [styles.ratingError]: ratingError })}
			>
				Select a rating:
			</Typography>
		);
	} else {
		ratingHelperText = (
			<Typography component="span">
				Rate as "{labels[hover !== -1 ? hover : rating]}"
			</Typography>
		);
	}

	return (
		<Box marginTop={1}>
			<Grid container alignItems="center" justify="center">
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid
						item
						container
						xs={12}
						justify="center"
						alignItems="center"
						spacing={1}
						className={styles.container}
					>
						<Grid item xs={12} container justify="center">
							<Typography>{ratingHelperText}</Typography>
						</Grid>
						<Grid item xs={12} container justify="center">
							<Rating
								name="second-rating"
								value={rating}
								precision={1}
								size="large"
								onChange={(event, newValue) => {
									setRating(newValue);
								}}
								onChangeActive={(event, newHover) => {
									setHover(newHover);
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={8} container justify="center">
							<TextField
								id="review-body"
								label="Your Review"
								name="review"
								multiline
								rows={4}
								fullWidth
								variant="outlined"
								size="small"
								inputRef={register({
									required: true,
									minLength: { value: 20, message: 'Minimum 20 characters' },
									maxLength: { value: 1000, message: 'Maximum 1000 characters' }
								})}
								error={Boolean(errors.review)}
								helperText={Boolean(errors.review) && errors.review.message}
								autoFocus
							/>
						</Grid>
						<Grid item container xs={12} justify="center">
							<LoadingButton
								type="submit"
								size="large"
								variant="contained"
								color="primary"
								pending={pending}
							>
								Submit
							</LoadingButton>
						</Grid>
					</Grid>
				</form>
			</Grid>
		</Box>
	);
}
