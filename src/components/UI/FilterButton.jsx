import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	filtersBtn: {
		textTransform: 'capitalize',
		width: '40%',
		margin: '5px 0'
	}
}));

export default function FilterButton(props) {
	const classes = useStyles();
	const [selected, setSelected] = useState(false);

	let color = 'default';
	let variant = 'outlined';

	if (selected) {
		color = 'primary';
		variant = 'contained';
	}

	return (
		<Button
			className={classes.filtersBtn}
			variant={variant}
			color={color}
			onClick={() => setSelected(!selected)}
		>
			{props.name}
		</Button>
	);
}
