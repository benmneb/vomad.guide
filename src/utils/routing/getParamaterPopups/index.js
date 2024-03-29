import { GET_ENUMS } from '../router';
import useGetPopupState from './useGetPopupState';

import AddProducts from '../../../components/Dialogs/AddProducts';
import Advertise from '../../../components/Dialogs/Advertise';
import Auth from '../../../components/Dialogs/Auth';
import AuthResetPassword from '../../../components/Dialogs/AuthResetPassword';
import Faq from '../../../components/Dialogs/FAQ';
import Feedback from '../../../components/Dialogs/Feedback';
import GetTheApp from '../../../components/Dialogs/GetTheApp';
import Invest from '../../../components/Dialogs/Invest';
import Privacy from '../../../components/Dialogs/Privacy';
import SupportUs from '../../../components/Dialogs/SupportUs';
import Terms from '../../../components/Dialogs/Terms';
import UserProfile from '../../../components/Dialogs/UserProfile';

const popups = {
	[GET_ENUMS.popup.signIn]: Auth,
	[GET_ENUMS.popup.advertise]: Advertise,
	[GET_ENUMS.popup.feedback]: Feedback,
	[GET_ENUMS.popup.supportUs]: SupportUs,
	[GET_ENUMS.popup.invest]: Invest,
	[GET_ENUMS.popup.addProducts]: AddProducts,
	[GET_ENUMS.popup.terms]: Terms,
	[GET_ENUMS.popup.privacy]: Privacy,
	[GET_ENUMS.popup.faq]: Faq,
	[GET_ENUMS.popup.userProfile]: UserProfile,
	[GET_ENUMS.popup.resetPassword]: AuthResetPassword,
	[GET_ENUMS.popup.getTheApp]: GetTheApp,
	[GET_ENUMS.action.advertise]: Advertise,
	[GET_ENUMS.action.login]: Auth,
	[GET_ENUMS.action.feedback]: Feedback,
	[GET_ENUMS.action.addProducts]: AddProducts,
	[GET_ENUMS.action.invest]: Invest
};

export default function GetParameterPopups() {
	const { mountedPopup, isOpened } = useGetPopupState();
	const Component = popups[mountedPopup];

	if (!Component) {
		return null;
	}

	return <Component isOpened={isOpened} />;
}
