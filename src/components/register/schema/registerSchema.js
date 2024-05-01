import * as Yup from 'yup';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
export const registerSchema = Yup.object().shape({
	name: Yup.string().required('İsim Gerekli!'),
	email: Yup.string()
		.email('Geçersiz E-Mail!')
		.matches(emailRules, { message: ' Not valid :{' })
		.required('E-Mail Gerekli !'),
	password: Yup.string()
		.matches(passwordRules, {
			message: 'Daha karmaşık bir şifre belirleyin !',
		})
		.required('Şifre Gerekli !'),
});
