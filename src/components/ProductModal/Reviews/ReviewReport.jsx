import { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { showSnackbar } from '../../../store/actions';
import DialogTitle from '../../../utils/DialogTitle';
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Dialog,
	Backdrop,
	CircularProgress
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReportProblemRounded, ReportRounded } from '@material-ui/icons';
import { red, deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
	backdrop: {
		zIndex: theme.zIndex.modal + 1,
		color: '#fff'
	},
	offensive: {
		color: red[500]
	},
	spam: {
		color: deepOrange[400]
	}
}));

export default function ReviewReport({ onClose, reviewId, show }) {
	const styles = useStyles();
	const dispatch = useDispatch();
	const currentUserData = useSelector((state) => state.auth.currentUserData);
	const [pending, setPending] = useState(false);

	const handleClose = () => {
		setPending(false);
		onClose();
	};

	const handleListItemClick = (reason) => {
		setPending(true);
		axios
			.post('/email/report-review', {
				body: `<p><strong>New Review Report Received ${new Date()}</strong></p>
			<p>User <strong>${
				currentUserData.id
			}</strong> reported review <strong>${reviewId}</strong> as "${reason}".</p>`
			})
			.then(() => {
				handleClose();
				dispatch(
					showSnackbar({
						type: 'success',
						color: 'info',
						title: 'Report received',
						message: "Thank you, we'll take it from here",
						emoji: '👍'
					})
				);
			})
			.catch((err) => {
				setPending(false);
				dispatch(
					showSnackbar({
						type: 'error',
						title: 'Could not report',
						message: `${err.message}. Please try again soon.`
					})
				);
			});
	};

	return (
		<Dialog onClose={handleClose} aria-labelledby="report-review-title" open={show}>
			<DialogTitle id="report-review-title" onClose={handleClose}>
				Report as...
			</DialogTitle>
			<List>
				<ListItem
					button
					onClick={() => handleListItemClick('inappropriate or offensive')}
				>
					<ListItemIcon>
						<ReportRounded fontSize="large" className={styles.offensive} />
					</ListItemIcon>
					<ListItemText primary="Inappropriate or offensive" />
				</ListItem>
				<ListItem button onClick={() => handleListItemClick('advertising or spam')}>
					<ListItemIcon>
						<ReportProblemRounded fontSize="large" className={styles.spam} />
					</ListItemIcon>
					<ListItemText primary="Advertising or spam" />
				</ListItem>
			</List>
			<Backdrop open={pending} className={styles.backdrop}>
				<CircularProgress color="inherit" />
			</Backdrop>
		</Dialog>
	);
}
