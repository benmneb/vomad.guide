import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StoresList from './StoresList';
import StoresAdd from './StoresAdd';
import {
	Button,
	Collapse,
	List,
	ListSubheader,
	Typography,
	Box
} from '@material-ui/core';
import { CancelRounded } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	storesList: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	cancelButton: {
		color: theme.palette.text.secondary
	}
}));

export default function StoresListSection(props) {
	const styles = useStyles();

	function toggleAddStore() {
		props.setShowAddStore(!props.showAddStore);
	}

	return (
		<List
			component="header"
			aria-label="Stores near you"
			className={styles.storesList}
			subheader={
				<ListSubheader style={{ zIndex: '2' }} component="div">
					<Box display="flex" justifyContent="space-between" alignItems="center">
						<Typography component="h2" variant="h5">
							Stores Near You
						</Typography>
						<Button
							size="large"
							style={{ margin: '8px 0' }}
							onClick={toggleAddStore}
							variant={props.showAddStore ? 'outlined' : 'contained'}
							color={props.showAddStore ? 'default' : 'primary'}
							startIcon={props.showAddStore ? <CancelRounded color="disabled" /> : null}
							classes={props.showAddStore ? { label: styles.cancelButton } : null}
						>
							{props.showAddStore ? 'Cancel' : 'Add Store'}
						</Button>
					</Box>
				</ListSubheader>
			}
		>
			<Collapse in={props.showAddStore} timeout="auto" unmountOnExit>
				<StoresAdd hide={toggleAddStore} />
			</Collapse>
			<StoresList
				stores={props.stores}
				selectedStore={props.selectedStore}
				listItemClick={props.onListItemClick}
				copyAddress={props.handleCopyAddress}
				getDirections={props.getDirections}
			/>
		</List>
	);
}
