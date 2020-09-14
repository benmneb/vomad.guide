import React from 'react';
import { connect } from 'react-redux';
import { useTheme, withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseRoundedIcon from '@material-ui/icons/Close';
import {
	Dialog,
	DialogContent,
	DialogContentText,
	Typography,
	IconButton,
	useMediaQuery,
	Box
} from '@material-ui/core';
import * as actionCreators from '../../store/actions';

const styles = (theme) => ({
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500]
	}
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Box component="header">
				<Typography variant="h6" component="h1">
					{children}
				</Typography>
				{onClose ? (
					<IconButton
						aria-label="close"
						className={classes.closeButton}
						onClick={onClose}
						autoFocus
					>
						<CloseRoundedIcon />
					</IconButton>
				) : null}
			</Box>
		</MuiDialogTitle>
	);
});

const Privacy = (props) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

	const onClose = () => {
		props.onTogglePrivacyModal();
	};

	return (
		<Dialog
			open={props.showPrivacyModal}
			onClose={onClose}
			aria-labelledby="privacy-dialog-title"
			aria-describedby="privacy-dialog-description"
			fullScreen={fullScreen}
		>
			<DialogTitle id="alert-dialog-title" onClose={onClose}>
				{'Privacy Policy'}
			</DialogTitle>
			<DialogContent>
				<DialogContentText component="article" id="privacy-dialog-description">
					<Typography variant="body1" gutterBottom>
						Your privacy is critically important to us.
					</Typography>
					<Typography variant="body1" gutterBottom>
						This Privacy Policy is in relation to the website and mobile application (The
						Vomad Guide or VOMADguide) which is operated by VOMAD (we, our or us).
						&nbsp;It is available at: https://vomad.guide. This policy lays out the types
						of information that we may collect from you when you access or use our
						websites and mobile applications (collectively, our &quot;Services&quot;).
					</Typography>
					<Typography variant="body1" gutterBottom>
						This Privacy Policy sets out our commitment to protecting the privacy of
						personal information provided to us, or otherwise collected by us, offline or
						online, including through our http://vomad.guide website and mobile
						applications.
					</Typography>
					<Typography variant="body1" gutterBottom>
						We respect your privacy and are committed to protecting personally
						identifiable information you may provide us through the Website and mobile
						app. We have adopted this privacy policy (&quot;Privacy Policy&quot;) to
						explain what information may be collected on our Services, how we use this
						information, and under what circumstances we may disclose the information to
						third parties. This Privacy Policy applies only to information we collect
						through our Services only and does not apply to our collection of information
						from other sources.
					</Typography>
					<Typography variant="body1" gutterBottom>
						This Privacy Policy, together with the Terms and Conditions posted on our
						website and mobile app, set forth the general rules and policies governing
						your use of our Services. Depending on your activities when visiting our
						website or mobile app, you may be required to agree to additional terms and
						conditions.
					</Typography>
					<Typography variant="body1" gutterBottom>
						The principles set out in this Privacy Notice apply to all instances in which
						VOMDguide receives your personal data as a Data Controller for the purposes
						described in this notice. Those purposes are processing of data in order to
						participate in the various activities available on our Services or as
						mentioned below.
					</Typography>
					<Typography variant="body1" gutterBottom>
						By using our website or mobile apps you accept the terms of this Privacy
						Policy.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Website Visitors:
					</Typography>
					<Typography variant="body1" gutterBottom>
						We collect several types of information including non-personally-identifying
						information and personally-identifying-information. This information can be
						collected:
					</Typography>
					<Typography variant="body1" gutterBottom>
						directly from you when you voluntarily provide it to us; and/or
					</Typography>
					<Typography variant="body1" gutterBottom>
						automatically as you navigate through our Services (this may include usage
						details, IP addresses and information collected through cookies).
					</Typography>
					<Typography variant="body1" gutterBottom>
						Like most website operators, VOMADguide collects non-personally-identifying
						information of the sort that web browsers and servers typically make
						available, such as the browser type, language preference, referring site, and
						the date and time of each visitor request. VOMADguide&#39;s purpose in
						collecting non-personally identifying information is to better understand how
						VOMADguide&#39;s visitors use its Services. From time to time, VOMADguide may
						release non-personally-identifying information in the aggregate, e.g by
						publishing a report on trends in the usage of its website.
					</Typography>
					<Typography variant="body1" gutterBottom>
						VOMADguide also collects potentially personally-identifying information like
						Internet Protocol (IP) addresses for visitors and logged in users. VOMADguide
						only discloses logged in user and visitors IP addresses under the same
						circumstances that it uses and discloses personally-identifying information as
						described below.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Types of Information Gathered by our Services:
					</Typography>
					<Typography variant="body1" gutterBottom>
						- Gathering of Personally-Identifying Information:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Certain visitors to VOMADguide&#39;s services choose to interact with
						VOMADguide in ways that require VOMADguide to gather personally-identifying
						information. The amount and type of information that VOMADguide gathers
						depends on the nature of the interaction.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Information collected may include your member name (username), email address,
						location/hometown, password and other information you may provide with your
						account such as your profile picture that will be publicly displayed as part
						of your account profile.
					</Typography>
					<Typography variant="body1" gutterBottom>
						You may optionally provide us with some of this information through
						third-party sign-in services such as Facebook and Google Plus.
					</Typography>
					<Typography variant="body1" gutterBottom>
						In such cases, we store whatever information is made available to us through
						these sign-in services.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Your email address and password are not displayed or shared with any other
						person or third party services.
					</Typography>
					<Typography variant="body1" gutterBottom>
						- Public Content:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Some of the information you may choose to share in our Services are published
						or displayed (hereinafter, &quot;posted&quot;) on publicly accessible areas of
						our site and applications (collectively, &ldquo;User Contributions&rdquo;),
						these are:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Profile information (including username, hometown and profile picture);
					</Typography>
					<Typography variant="body1" gutterBottom>
						Reviews;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Ratings;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Last active status;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Stores tagged by you;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Achievements (such as first comment, top review, ect); and
					</Typography>
					<Typography variant="body1" gutterBottom>
						Points awarded.&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Your User Contributions are posted and displayed to others at your own risk.
						We cannot control the actions of other users using our services with whom you
						may choose to share your User Contributions. Therefore, we cannot and do not
						guarantee that your User Contributions will not be viewed by unauthorized
						persons.&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						We may display the publicly accessible information on our Services, share it
						with businesses, and further distribute it to a wider audience through third
						party sites and services (such as Instagram, Facebook, Twitter, YouTube, and
						other services for the purpose of promoting Vomad and our content). You should
						be careful about revealing any sensitive details about yourself in such
						postings.
					</Typography>
					<Typography variant="body1" gutterBottom>
						- Location Data Collection and How to Opt Out:
					</Typography>
					<Typography variant="body1" gutterBottom>
						When you use one of our location-enabled services such as our website and
						mobile apps, we may collect and process information about your mobile
						device&#39;s GPS location (&ldquo;location data&rdquo;) including the
						latitude, longitude or altitude of your mobile device) to customize the
						Services with location-based information and features. The location data
						collected is used to:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Display stores that sell products available near you or in your area;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Display advertisements and applicable promotions relevant to you; and
					</Typography>
					<Typography variant="body1" gutterBottom>
						Show products and stores relevant to you.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Location data is only collected when the app and website is being used.&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Some of these services require your personal data for the feature to work and
						we may associate location data with your device ID and other information we
						hold about you. We keep this data for no longer than is reasonably necessary
						for providing services to you.&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						The location services feature is optional and can be opted out if you wish to
						do so. If you wish to use the particular feature, you will be asked to consent
						to your data being used for this purpose. You can withdraw your consent at any
						time by disabling the GPS or other location-tracking functions on your device,
						provided your device allows you to do this. See your device manufacturer&#39;s
						instructions for further details.
					</Typography>
					<Typography variant="body1" gutterBottom>
						The use of collected information:
					</Typography>
					<Typography variant="body1" gutterBottom>
						The information collected, held, used and disclosed by our Services from the
						sources mentioned above are also used for the following:
					</Typography>
					<Typography variant="body1" gutterBottom>
						to enable you to access and use our Site, associated applications and
						associated social media platforms;
					</Typography>
					<Typography variant="body1" gutterBottom>
						&nbsp;for internal record keeping and administrative purposes;
					</Typography>
					<Typography variant="body1" gutterBottom>
						&nbsp;for analytics, market research and business development, including to
						operate and improve our Services, associated applications and associated
						social media platforms;
					</Typography>
					<Typography variant="body1" gutterBottom>
						to run competitions and/or offer additional benefits to you;
					</Typography>
					<Typography variant="body1" gutterBottom>
						&nbsp;for advertising and marketing, including to send you promotional
						information about our products and services and information about third
						parties that we consider may be of interest to you; and
					</Typography>
					<Typography variant="body1" gutterBottom>
						to comply with our legal obligations and resolve any disputes that we may
						have;&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Storage and Security:
					</Typography>
					<Typography variant="body1" gutterBottom>
						The security of your Personal Information is important to us. Vomad is
						extremely protective of any personal information such as email, passwords and
						the locations of our users. Our Services has security measures in place to
						protect against the loss, misuse, or alteration of the information under our
						control.
					</Typography>
					<Typography variant="body1" gutterBottom>
						However, remember that no method of transmission over the Internet, or method
						of electronic storage is 100% secure. Please note that no security measures
						are perfect or impenetrable. While we strive to use commercially acceptable
						means to protect your Personal Information, we cannot guarantee its absolute
						security.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Disclosure of information to Third Parties:
					</Typography>
					<Typography variant="body1" gutterBottom>
						We may disclose shared and collected information on our Services to:&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						third party service providers for the purpose of enabling them to provide
						their services, including (without limitation) IT service providers, data
						storage, web-hosting and server providers, maintenance or problem-solving
						providers, marketing or advertising providers, professional advisors and
						payment systems operators;
					</Typography>
					<Typography variant="body1" gutterBottom>
						our employees, contractors and/or related entities;
					</Typography>
					<Typography variant="body1" gutterBottom>
						our existing or potential agents or business partners;
					</Typography>
					<Typography variant="body1" gutterBottom>
						anyone to whom our business or assets (or any part of them) are, or may (in
						good faith) be, transferred;
					</Typography>
					<Typography variant="body1" gutterBottom>
						courts, tribunals and regulatory authorities, in the event you fail to pay for
						goods or services we have provided to you;
					</Typography>
					<Typography variant="body1" gutterBottom>
						courts, tribunals, regulatory authorities and law enforcement officers, as
						required by law, in connection with any actual or prospective legal
						proceedings, or in order to establish, exercise or defend our legal rights;
					</Typography>
					<Typography variant="body1" gutterBottom>
						third parties, including agents or sub-contractors, who assist us in providing
						information, products, services or direct marketing to you. This may include
						parties located, or that store data, outside of Australia; and
					</Typography>
					<Typography variant="body1" gutterBottom>
						third parties to collect and process data, such as Google Analytics or other
						relevant businesses. This may include parties that store data outside of
						Australia.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Advertisements:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Ads appearing on our website may be delivered to users by advertising
						partners, who may set cookies. These cookies allow the ad server to recognize
						your computer each time they send you an online advertisement to compile
						information about you or others who use your computer. This information allows
						ad networks to, among other things, deliver targeted advertisements that they
						believe will be of most interest to you. This Privacy Policy covers the use of
						cookies by Vomad and does not cover the use of cookies by any advertisers.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Links To External Sites:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Our Service may contain links to external sites that are not operated by us.
						If you click on a third party link, you will be directed to that third
						party&#39;s site. We strongly advise you to review the Privacy Policy and
						terms and conditions of every site you visit.
					</Typography>
					<Typography variant="body1" gutterBottom>
						We have no control over, and assume no responsibility for the content, privacy
						policies or practices of any third party sites, products or services.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Newsletter Sign-ups:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Once you create an account in one of our Services, you are automatically
						subscribed to our email newsletters from the VOMADguide Web site (during
						registration, from your member profile). The information that we gather from
						subscribers to our newsletter list (including email addresses) is not shared
						with other third party organizations or companies.&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						All emails sent to email newsletter subscribers contain a link to unsubscribe
						from our newsletter. You may subscribe or unsubscribe to any email
						communication from VOMADguide at any time.
					</Typography>
					<Typography variant="body1" gutterBottom>
						If you have any questions about VOMADguide newsletters, please contact us at:
						info@vomadguide.com
					</Typography>
					<Typography variant="body1" gutterBottom>
						VOMADguide Uses Third Party Websites and Services for Remarketing:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Vomad uses the remarketing services to advertise on third party websites
						(including Google and Facebook) to previous visitors to our site. It could
						mean that we advertise to previous visitors who haven&#39;t completed a task
						on our site, for example using the contact form to make an enquiry. This could
						be in the form of an advertisement on the Google search results page, or on
						Facebook Newsfeed. Third-party vendors, including Google and Facebook, use
						cookies to serve ads based on someone&#39;s past visits. Of course, any data
						collected will be used in accordance with our own privacy policy and
						Google&#39;s privacy policy.
					</Typography>
					<Typography variant="body1" gutterBottom>
						You can set preferences for how third party services such as Google and
						Facebook advertises to you using the Preferences/Setting page, and if you want
						to you can opt out of interest-based advertising entirely by cookie settings
						or permanently using a browser plugin.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Aggregated Statistics:
					</Typography>
					<Typography variant="body1" gutterBottom>
						VOMADguide may collect statistics about the behavior of visitors to its
						Services. VOMADguide may display this information publicly or provide it to
						others. However, VOMADguide does not disclose your personally-identifying
						information.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Affiliate Disclosure:
					</Typography>
					<Typography variant="body1" gutterBottom>
						VOMADguide uses affiliate links and does earn a commission from certain links.
						This does not affect your purchases or the price you may pay.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Cookies and Web Beacons:
					</Typography>
					<Typography variant="body1" gutterBottom>
						To enrich and perfect your online experience, VOMADguide uses
						&quot;Cookies&quot;, similar technologies and services provided by others to
						display personalized content, appropriate advertising and store your
						preferences on your computer.
					</Typography>
					<Typography variant="body1" gutterBottom>
						A cookie is a string of information that a website stores on a visitor&#39;s
						computer, and that the visitor&#39;s browser provides to the website each time
						the visitor returns. VOMADguide uses cookies to help us identify and track
						visitors, their usage of our Services, and their website access preferences.
						VOMADguide visitors who do not wish to have cookies placed on their computers
						should set their browsers to refuse cookies before using our Services, with
						the drawback that certain features of VOMADguide may not function properly
						without the aid of cookies.
					</Typography>
					<Typography variant="body1" gutterBottom>
						By continuing to navigate our Services without changing your cookie settings,
						you hereby acknowledge and agree to VOMADguide use of cookies.
					</Typography>
					<Typography variant="body1" gutterBottom>
						We may also use web beacons on our Services from time to time. Web beacons
						(also known as Clear GIFs) are small pieces of code placed on a web page to
						monitor the visitor&rsquo;s behaviour and collect data about the
						visitor&rsquo;s viewing of a web page. For example, web beacons can be used to
						count the users who visit a web page or to deliver a cookie to the browser of
						a visitor viewing that page.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Business Transfers:
					</Typography>
					<Typography variant="body1" gutterBottom>
						If VOMADguide, or substantially all of its assets, were acquired, or in the
						unlikely event that VOMADguide goes out of business or enters bankruptcy, user
						information would be one of the assets that is transferred or acquired by a
						third party. You acknowledge that such transfers may occur, and that any
						acquirer of VOMADguide may continue to use your personal information as set
						forth in this policy.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Privacy Policy Changes:
					</Typography>
					<Typography variant="body1" gutterBottom>
						Although most changes are likely to be minor, VOMADguide may change its
						Privacy Policy from time to time, and in VOMADguide sole discretion.
						VOMADguide encourages visitors to frequently check this page for any changes
						to its Privacy Policy. Your continued use of this site after any change in
						this Privacy Policy will constitute your acceptance of such change.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Your Rights and Controlling Your Personal Information:&nbsp;
					</Typography>
					<Typography variant="body1" gutterBottom>
						Choice and consent: Please read this Privacy Policy carefully. By providing
						personal information to us, you consent to us collecting, holding, using and
						disclosing your personal information in accordance with this Privacy Policy.
						You do not have to provide personal information to us, however, if you do not,
						it may affect your use of this Site or the products and/or services offered on
						or through it.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Information from third parties: If we receive personal information about you
						from a third party, we will protect it as set out in this Privacy Policy. If
						you are a third party providing personal information about somebody else, you
						represent and warrant that you have such person&rsquo;s consent to provide the
						personal information to us.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Restrict: You may choose to restrict the collection or use of your personal
						information. &nbsp;If you have previously agreed to us using your personal
						information for direct marketing purposes, you may change your mind at any
						time by contacting us using the details below.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Access: You may request details of personal information that we hold about
						you. &nbsp;An administrative fee may be payable for the provision of such
						information. &nbsp;In certain circumstances, as set out in the Privacy Act
						1988 (Cth), we may refuse to provide you with personal information that we
						hold about you.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Correction: If you believe that any information we hold about you is
						inaccurate, out of date, incomplete, irrelevant or misleading, please contact
						us using the details below. We will take reasonable steps to correct any
						information found to be inaccurate, incomplete, misleading or out of date.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Complaints: If you believe that we have breached the Australian Privacy
						Principles and wish to make a complaint, please contact us using the details
						below and provide us with full details of the alleged breach. We will promptly
						investigate your complaint and respond to you, in writing, setting out the
						outcome of our investigation and the steps we will take to deal with your
						complaint.
					</Typography>
					<Typography variant="body1" gutterBottom>
						Unsubscribe: To unsubscribe from our email database or opt-out of
						communications (including marketing communications), please contact us using
						the details below or opt-out using the opt-out facilities provided in the
						communication.
					</Typography>
					<Typography variant="body1" gutterBottom>
						For any questions or notices, please contact us at:
					</Typography>
					<Typography variant="body1" gutterBottom>
						info@vomadguide.com
					</Typography>
					<Typography variant="body1" gutterBottom>
						Last Update: 14 November 2019
					</Typography>
				</DialogContentText>
			</DialogContent>
		</Dialog>
	);
};

const mapStateToProps = (state) => {
	return {
		showPrivacyModal: state.showPrivacyModal
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTogglePrivacyModal: () => dispatch(actionCreators.togglePrivacyModal())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Privacy);