import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
	GridList,
	GridListTile,
	GridListTileBar,
	Typography,
	Toolbar,
	Button,
	Box
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { subCat1s } from '../../assets/subCat1s';
import Hero from '../hero/Hero';

const useStyles = makeStyles((theme) => ({
	gridList: {
		flexWrap: 'nowrap',
		// Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
		transform: 'translateZ(0)'
	},
	gridListTile: {
		'&:hover img': {
			filter: 'brightness(100%)'
		}
	},
	titleBar: {
		position: 'absolute',
		top: '40%',
		height: '20%',
		cursor: 'pointer'
	},
	title: {
		color: theme.palette.common.white,
		fontSize: theme.typography.h6.fontSize,
		textAlign: 'center',
		lineHeight: theme.typography.body2.lineHeight
	},
	image: {
		cursor: 'pointer',
		filter: 'brightness(85%)',
		transitionProperty: 'filter',
		transitionDuration: `${theme.transitions.duration.complex}ms`
	}
}));

export default function SingleLineGridList() {
	const styles = useStyles();

	return (
		<>
			<Hero
				heading="Vegan Food & Drink Products"
				subheading="There are 5,147 vegan food & drink products in 103 categories within Australia from brands like Gardein, Tofurky, Linda McCartney and 285 more."
				showAddProductsLink
			/>
			<Box marginY={-4}>
				{['Baby', 'Bakery', 'Drinks', 'Fridge & Freezer', 'Pantry', 'Pet Food'].map(
					(category) => (
						<Box marginY={4} key={category}>
							<Toolbar>
								<Box flexGrow="1">
									<Typography variant="h5" align="left">
										{category}
									</Typography>
								</Box>
								<Box flexGrow="0">
									<Link to="/food-drink/nut-butters-spreads">
										<Button variant="text" color="default" endIcon={<ChevronRightIcon />}>
											See all {category}
										</Button>
									</Link>
								</Box>
							</Toolbar>
							<GridList className={styles.gridList} cols={5} cellHeight={300} spacing={0}>
								{subCat1s.map((image) => (
									<GridListTile key={image.img} cols={1} className={styles.gridListTile}>
										<img src={image.img} alt={image.title} className={styles.image} />
										<GridListTileBar
											titlePosition="top"
											title={image.title}
											className={styles.titleBar}
											classes={{
												title: styles.title
											}}
										/>
									</GridListTile>
								))}
							</GridList>
						</Box>
					)
				)}
			</Box>
		</>
	);
}