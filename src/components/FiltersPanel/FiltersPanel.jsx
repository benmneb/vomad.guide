import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Drawer, Typography, Grid, Box } from '@material-ui/core';
import SortBy from './SortBy';
import OrderBy from './OrderBy';
import FilterButton from './FilterButton';
import { ingredients, allergens, tags } from '../../assets/filters';

const drawerWidth = 395;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		position: 'sticky'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		top: 64, // theme.mixins.toolbar min width 600px height
		right: 0,
		height: `calc(100vh - 64px)`, // theme.mixins.toolbar min width 600px height
		zIndex: theme.zIndex.appBar,
		borderTop: `1px solid rgba(0, 0, 0, 0.12);`
	},
	filtersSectionFirstTitle: {
		marginTop: theme.spacing(1)
	},
	filtersSectionTitle: {
		marginTop: theme.spacing(1)
	},
	subtitle1: {
		fontSize: theme.typography.subtitle2.fontSize
	}
}));

const FiltersPanel = (props) => {
	const styles = useStyles();

	return (
		<Drawer
			className={styles.drawer}
			variant="persistent"
			anchor="right"
			open={props.showFiltersPanel}
			classes={{
				paper: styles.drawerPaper
			}}
		>
			<Typography align="center" className={styles.filtersSectionFirstTitle}>
				Tags
			</Typography>
			<Grid container justify="space-evenly">
				{tags.map((tag) => (
					<FilterButton name={tag.name} tooltip={tag.tooltip} key={tag.name} />
				))}
			</Grid>
			<Typography align="center" className={styles.filtersSectionTitle}>
				Ingredients
			</Typography>
			<Grid container justify="space-evenly">
				{ingredients.map((ing) => (
					<FilterButton name={ing.name} tooltip={ing.tooltip} key={ing.name} />
				))}
			</Grid>
			<Typography align="center" className={styles.filtersSectionTitle}>
				Allergens
			</Typography>
			<Grid container justify="space-evenly">
				{allergens.map((allergen) => (
					<FilterButton
						name={allergen.name}
						tooltip={allergen.tooltip}
						key={allergen.name}
					/>
				))}
			</Grid>
			<Typography align="center" className={styles.filtersSectionTitle}>
				Sort by
			</Typography>
			<Grid container justify="space-evenly">
				<Grid item flexgrow="1">
					<SortBy />
				</Grid>
			</Grid>
			<Typography align="center" className={styles.filtersSectionTitle}>
				Order by
			</Typography>
			<Grid container justify="center">
				<OrderBy />
			</Grid>
			<Box margin={2}>
				<Typography
					variant="subtitle1"
					classes={{ subtitle1: styles.subtitle1 }}
					paragraph
					align="center"
				>
					Allergens are a guide only.
					<br />
					Always check the label before use.
				</Typography>
			</Box>
		</Drawer>
	);
};

const mapStateToProps = (state) => {
	return {
		showFiltersPanel: state.showFiltersPanel
	};
};

export default connect(mapStateToProps)(FiltersPanel);