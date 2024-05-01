import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
export const loginSchema = Yup.object().shape({
	email: Yup.string()
		.email('Geçersiz E-Mail!')
		.matches(emailRules, { message: ' Not valid :{' })
		.required('E-Mail Gerekli !'),
	password: Yup.string()
		.matches(passwordRules, {
			message: 'Please create a stronger password !',
		})
		.required('Şifre Gerekli !'),
});
