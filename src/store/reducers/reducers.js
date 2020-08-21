import * as actionTypes from '../actions/actionTypes';

const initialState = {
	showFiltersPanel: false,
	showSideDrawer: false,
	showProductModal: false,
	showAddProductsModal: false,
	showAdvertiseModal: false,
	showTermsModal: false,
	showPrivacyModal: false,
	showFeedbackModal: false,
	showAddReview: false,
	ratingBeforeClickedAddReviewSnackbar: null
};

export default function Reducers(state = initialState, action) {
	switch (action.type) {
		case actionTypes.SHOW_FILTERS_PANEL:
			return {
				...state,
				showFiltersPanel: true
			};
		case actionTypes.HIDE_FILTERS_PANEL:
			return {
				...state,
				showFiltersPanel: false
			};
		case actionTypes.SHOW_SIDE_DRAWER:
			return {
				...state,
				showSideDrawer: true
			};
		case actionTypes.HIDE_SIDE_DRAWER:
			return {
				...state,
				showSideDrawer: false
			};
		case actionTypes.TOGGLE_PRODUCT_MODAL:
			return {
				...state,
				showProductModal: !state.showProductModal,
				ratingBeforeClickedAddReviewSnackbar: null
			};
		case actionTypes.TOGGLE_ADD_PRODUCTS_MODAL:
			return {
				...state,
				showAddProductsModal: !state.showAddProductsModal
			};
		case actionTypes.TOGGLE_ADVERTISE_MODAL:
			return {
				...state,
				showAdvertiseModal: !state.showAdvertiseModal
			};
		case actionTypes.TOGGLE_TERMS_MODAL:
			return {
				...state,
				showTermsModal: !state.showTermsModal
			};
		case actionTypes.TOGGLE_PRIVACY_MODAL:
			return {
				...state,
				showPrivacyModal: !state.showPrivacyModal
			};
		case actionTypes.TOGGLE_FEEDBACK_MODAL:
			return {
				...state,
				showFeedbackModal: !state.showFeedbackModal
			};
		case actionTypes.CLICK_ADD_REVIEW_AFTER_RATING:
			return {
				...state,
				ratingBeforeClickedAddReviewSnackbar: Number(action.payload.rating)
			};
		case actionTypes.SHOW_ADD_REVIEW:
			return {
				...state,
				showAddReview: true
			};
		case actionTypes.HIDE_ADD_REVIEW:
			return {
				...state,
				showAddReview: false
			};
		default:
			return state;
	}
}
