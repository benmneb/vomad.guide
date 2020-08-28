import React, { useState } from 'react';
import {
	Button,
	Paper,
	Grid,
	CardMedia,
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Tooltip,
	Box
} from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import EcoIcon from '@material-ui/icons/Eco';
import { makeStyles } from '@material-ui/core/styles';
import AboutEdit from './AboutEdit';

const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary
	},
	heading: {
		color: theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightBold
	},
	table: {
		minWidth: 280
	},
	buttonLabel: {
		color: theme.palette.text.secondary,
		textTransform: 'none'
	}
}));

export default function ProductAbout({ product }) {
	const styles = useStyles();
	const [showEditModal, setShowEditModal] = useState(false);

	function handleShowEditModal() {
		setShowEditModal(true);
	}

	function handleCloseEditModal() {
		setShowEditModal(false);
	}

	function createData(nutrition, perServe, per100g) {
		return { nutrition, perServe, per100g };
	}

	const rows = [
		createData(
			'Energy',
			product && product[0].energy1,
			product && product[0].energy2
		),
		createData(
			'Protein',
			product && product[0].protein1,
			product && product[0].protein2
		),
		createData(
			'Fat, total',
			product && product[0].totalfat1,
			product && product[0].totalfat2
		),
		createData(
			'- saturated',
			product && product[0].satfat1,
			product && product[0].satfat2
		),
		createData(
			'Carbohydrate',
			product && product[0].carb1,
			product && product[0].carb2
		),
		createData(
			'- sugars',
			product && product[0].sugar1,
			product && product[0].sugar2
		),
		createData(
			'Dietry fibre',
			product && product[0].fibre1,
			product && product[0].fibre2
		),
		createData(
			'Sodium',
			product && product[0].sodium1,
			product && product[0].sodium2
		)
	];

	return (
		<>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6}>
					<Grid container spacing={0} direction="column">
						<Container maxWidth="xs">
							<Box padding={2} color="text.secondary">
								<Grid item xs={12}>
									<CardMedia
										component="img"
										alt={product && product[0].productName}
										image={product && product[0].imageSrc}
										title={product && product[0].productName}
									/>
								</Grid>
							</Box>
						</Container>
					</Grid>
					<Grid container spacing={1} direction="column" alignItems="center">
						<Grid item xs={12}>
							<Typography className={styles.heading}>Buy Now Online</Typography>
						</Grid>
						{product &&
							product[0].storeLinks.map((store) => (
								<Grid key={store.linkId} item xs={12}>
									<Button
										variant="contained"
										color="primary"
										size="large"
										onClick={() =>
											window.open(
												store.link + '?ref=vomadguide',
												'_blank',
												'noopener'
											)
										}
										startIcon={store.isVegan ? <EcoIcon /> : null}
										endIcon={<OpenInNewIcon />}
									>
										{store.website}
									</Button>
								</Grid>
							))}
					</Grid>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Paper className={styles.paper} variant="outlined">
						<Typography gutterBottom className={styles.heading}>
							Ingredients
						</Typography>
						<Typography paragraph>
							{product && product[0].ingredients}
						</Typography>
						<Typography gutterBottom className={styles.heading}>
							Nutritional Info
						</Typography>
						<Typography>
							Servings per package: {product && product[0].serve1}
						</Typography>
						<Typography gutterBottom>
							Serving size: {product && product[0].serve2}
						</Typography>
						<TableContainer>
							<Table
								className={styles.table}
								size="small"
								aria-label="nutrition information"
							>
								<TableHead>
									<TableRow>
										<TableCell>Nutrition</TableCell>
										<TableCell align="right">Per Serve</TableCell>
										<TableCell align="right">Per 100g</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{rows.map((row) => (
										<TableRow key={row.nutrition}>
											<TableCell component="th" scope="row">
												{row.nutrition}
											</TableCell>
											<TableCell align="right">{row.perServe}</TableCell>
											<TableCell align="right">{row.per100g}</TableCell>
										</TableRow>
									))}
								</TableBody>
								<caption>
									Amounts are averages. Further information may be displayed on
									back of pack.
								</caption>
							</Table>
						</TableContainer>
						<Typography gutterBottom className={styles.heading}>
							Allergens
						</Typography>
						<Typography>{product && product[0].allergens}</Typography>
					</Paper>
					<Box display="flex" justifyContent="flex-end" marginTop={1}>
						<Tooltip
							title="Last edit was by Vomad on 18/08/2020"
							placement="left"
						>
							<Button
								onClick={handleShowEditModal}
								classes={{ label: styles.buttonLabel }}
							>
								Suggest an Edit
							</Button>
						</Tooltip>
					</Box>
				</Grid>
			</Grid>
			<AboutEdit
				show={showEditModal}
				productId={product && product[0].productId}
				onClose={handleCloseEditModal}
			/>
		</>
	);
}
