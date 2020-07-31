import React from 'react';
import classes from './SortBy.module.css';

import SwapVertIcon from '@material-ui/icons/SwapVert';
import {
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	IconButton,
	Tooltip,
	Zoom
} from '@material-ui/core';

const SortBy = ({ customStyle }) => {
	return (
		<div className={classes.container}>
			<div className={classes.content} name="sort-by">
				<FormControl variant="outlined">
					<InputLabel id="sort-by-label">Sort by</InputLabel>
					<Select
						labelId="sort-by-label"
						id="sort-by-select"
						label="Sort by"
						autoWidth
						defaultValue={1}
						style={customStyle}
					>
						<MenuItem value={1}>Popularity</MenuItem>
						<MenuItem value={2}>Rating</MenuItem>
						<MenuItem value={3}>Alphabetical</MenuItem>
					</Select>
				</FormControl>
				<Tooltip title="Swap sort order" TransitionComponent={Zoom} arrow>
					<IconButton aria-label="Order by ascending or descending">
						<SwapVertIcon />
					</IconButton>
				</Tooltip>
			</div>
		</div>
	);
};

export default SortBy;
