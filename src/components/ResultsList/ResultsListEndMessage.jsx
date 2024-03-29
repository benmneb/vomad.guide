import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import { AddRounded } from '@material-ui/icons';
import { usePrepareLink, getParams, getEnums } from '../../utils/routing';

export default function ResultsListEndMessage() {
	const addProductLink = usePrepareLink({
		query: {
			[getParams.popup]: getEnums.popup.addProducts
		}
	});

	return (
		<Box
			display="flex"
			flexDirection="column"
			justifyContent="center"
			textAlign="center"
			minHeight={300}
		>
			<Box margin={2}>
				<Typography color="textSecondary">Anything missing?</Typography>
			</Box>
			<Box margin={2}>
				<Button
					variant="outlined"
					startIcon={<AddRounded />}
					component={Link}
					to={addProductLink}
				>
					Add Products
				</Button>
			</Box>
		</Box>
	);
}
