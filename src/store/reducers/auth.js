import * as actionTypes from '../actions/actionTypes';

const initialState = {
	currentUserData: null,
	isAuthenticated: false,
	isUsingEmailAuth: false,
	isUsingEmailAuthRoute: 'login'
};

export default function AuthReducer(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SET_CURRENT_USER_DATA:
			return {
				...state,
				isAuthenticated: action.isAuth,
				currentUserData: action.user
			};
		case actionTypes.SET_IS_USING_EMAIL_AUTH:
			return {
				...state,
				isUsingEmailAuth: action.state
			};
		case actionTypes.SET_IS_USING_EMAIL_AUTH_ROUTE:
			return {
				...state,
				isUsingEmailAuthRoute: action.route
			};
		default:
			return state;
	}
}
