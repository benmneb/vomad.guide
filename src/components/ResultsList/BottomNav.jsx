import { useState, useCallback } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
	BottomNavigation,
	BottomNavigationAction,
	Badge,
	Hidden,
	Box
} from '@material-ui/core';
import { ArrowBackIosRounded, FilterListRounded, AppsRounded } from '@material-ui/icons';
import { showFiltersPanel, hideFiltersPanel } from '../../store/actions';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		position: 'fixed',
		bottom: 0,
		boxShadow: theme.reverseShadows[4],
		zIndex: theme.zIndex.appBar - 1
	},
	bottomNav: {
		...theme.mixins.toolbar,
		backgroundColor: theme.palette.background.default
	},
	badge: {
		color: theme.palette.background.paper,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: theme.spacing(0, 0.5),
		top: 2
	}
}));

export default function BottomNav() {
	const styles = useStyles();
	const history = useHistory();
	const location = useLocation();
	const dispatch = useDispatch();
	const filtersPanelIsOpen = useSelector((state) => state.ui.showFiltersPanel);
	const appliedFilters = useSelector((state) => state.results.appliedFilters);
	const [value, setValue] = useState(1);

	const handleCategoriesClick = useCallback(() => {
		const releventPath = location.pathname.match(/^([^/]*\/){2}/)[0].slice(0, -1); // cuts off everything after the category
		if (releventPath === '/search') history.push('/');
		else history.push(releventPath);
	}, [history, location.pathname]);

	function handleResultsClick() {
		if (filtersPanelIsOpen) {
			setValue(1);
			return dispatch(hideFiltersPanel());
		}
	}

	function handleFiltersClick() {
		if (filtersPanelIsOpen) {
			setValue(1);
			return dispatch(hideFiltersPanel());
		}
		return dispatch(showFiltersPanel());
	}

	return (
		<Box display={{ xs: 'block', md: 'none' }} className={styles.root}>
			<BottomNavigation
				component="nav"
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
				showLabels
				className={styles.bottomNav}
			>
				<BottomNavigationAction
					label="Categories"
					icon={<ArrowBackIosRounded />}
					onClick={handleCategoriesClick}
				/>
				<BottomNavigationAction
					label="Results"
					icon={<AppsRounded />}
					onClick={handleResultsClick}
				/>
				<BottomNavigationAction
					label="Filters"
					icon={
						<>
							<Hidden smUp>
								<Badge
									color="primary"
									badgeContent={appliedFilters.length}
									classes={{ badge: styles.badge }}
								>
									<FilterListRounded />
								</Badge>
							</Hidden>
							<Hidden xsDown>
								<FilterListRounded />
							</Hidden>
						</>
					}
					onClick={handleFiltersClick}
				/>
			</BottomNavigation>
		</Box>
	);
}
