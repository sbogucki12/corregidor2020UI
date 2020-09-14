import React, { useState }  from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import "../subPages.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import constants from '../../utils/constants';

const ContactMain = () => {
	const [captchaValue, setCaptchaValue] = useState(false);
	const [formValue, setFormValue] = useState({
		from: '',
		subject: 'Email - Corregidor Tech',
		content: '',
		name: '',
	});
	const [isSending, setIsSending] = useState(false);

	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	};

	function handleExpired() {
		setCaptchaValue(false);
	};

	function onChange(value) {
		if (value) {
			setCaptchaValue(true);
		}
	};

	function handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;

		setFormValue({ ...formValue, [name]: [value] });
	};

	function handleSubmit(e) {
		e.preventDefault();
		let emailValidation = true;
		if (!captchaValue) {
			alert(constants.PLEASECOMPLETECAPTCHA);
		}

		if (!validateEmail(formValue.from)) {
			emailValidation = false;
			alert(constants.PLEASEPROVIDEVALIDEMAIL);
		}

		let content = formValue.content + ' from: ' + formValue.name;
		const data = {
			from: formValue.from.toString(),
			subject: formValue.subject.toString(),
			content: content.toString(),
		};

		if (captchaValue && emailValidation) {
			setIsSending(true);

			fetch(constants.SENDEMAILAPIURL, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					captcha: 'true',
				},
				body: JSON.stringify(data),
			}).then((response) => {
				setFormValue({
					from: '',
					subject: 'Email - Corregidor Tech',
					content: '',
					name: '',
				});
				setIsSending(false);
				alert(constants.MESSAGESENT);
			});
		}
	};

	return (
		<div id="experienceMainContainer">
			<div className="servicesEngineeringBox">
				<div className="servicesEngineeringTitleBox">
					<h1 className="servicesEngineeringTitleText">{constants.CONTACT}</h1>
				</div>
				<div>
					<div>
						<form
							onSubmit={handleSubmit}
							id="contactMainContactForm"
							aria-labelledby={constants.CONTACTFORM}
						>
							<label aria-labelledby={constants.NAME}>
								{constants.NAME}
								<input
									type="text"
									value={formValue.name}
									onChange={handleChange}
									name="name"
									maxLength={100}
								/>
							</label>
							<label aria-labelledby={constants.EMAIL}>
								{constants.EMAIL}
								<input
									type="email"
									value={formValue.from}
									onChange={handleChange}
									name="from"
									maxLength={100}
								/>
							</label>
							<label aria-labelledby={constants.MESSAGE}>
								{constants.MESSAGE}
								<textarea
									value={formValue.content}
									onChange={handleChange}
									name="content"
									maxLength={3000}
								/>
							</label>

							<div style={{ alignSelf: 'center' }}>
								<ReCAPTCHA
									sitekey="6LdSgbsZAAAAACVEzdk-q2evcLlyVHZz2FlAnnR6"
									onChange={onChange}
									onExpired={handleExpired}
									alt={constants.CAPTCHA}									
								/>
							</div>
							<button type="submit" value="Submit" alt={constants.SUBMIT} title={constants.SUBMIT}>
								Submit
							</button>
						</form>
						{isSending ? <h3>{constants.SENDING}</h3> : null}
					</div>
				</div>
				<div id="contactMainSocialBox">
					<a
						href={constants.TWITTERURL}
						target="_blank"
						rel="noreferrer noopener"
						alt={constants.TWITTERLINKTEXT}
					>
						<div className="contactMainSocialIconBox">
							<FontAwesomeIcon
								icon={faTwitterSquare}
								className="contactMainSocialIcon"
								title={constants.TWITTERLINKTEXT}
								alt={constants.TWITTERLINKTEXT}
							/>
						</div>
					</a>
					<a
						href={constants.INSTAGRAMURL}
						target="_blank"
						rel="noreferrer noopener"
						alt={constants.INSTAGRAMLINKTEXT}
					>
						<div className="contactMainSocialIconBox">
							<FontAwesomeIcon
								icon={faInstagramSquare}
								className="contactMainSocialIcon"
								alt={constants.INSTAGRAMLINKTEXT}
								title={constants.INSTAGRAMLINKTEXT}
							/>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactMain;
