import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Home from './Home';
import FoodDrink from './FoodDrink';
import Household from './Household';
import BottomNav from './BottomNav';
import ScrollToTopOnMount from '../../utils/ScrollToTop';

export default function Categories() {
	const location = useLocation();
	const [currentTab, setCurrentTab] = useState(0);
	const [category, setCategory] = useState(<Home />);

	const handleChangeCurrentTab = (event, newValue) => {
		setCurrentTab(newValue);
	};

	useEffect(() => {
		switch (location.pathname) {
			case '/':
				setCurrentTab(0);
				setCategory(<Home />);
				break;
			case '/food-drink':
				setCurrentTab(1);
				setCategory(<FoodDrink />);
				break;
			case '/household':
				setCurrentTab(2);
				setCategory(<Household />);
				break;
			default:
				return;
		}
	}, [location]);

	return (
		<>
			<ScrollToTopOnMount />
			{category}
			<BottomNav currentTab={currentTab} onChange={handleChangeCurrentTab} />
		</>
	);
}
