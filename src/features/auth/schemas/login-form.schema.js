import * as Yup from 'yup';

export const loginFormSchema = Yup.object().shape({
    phoneNumber: Yup.string().min(11).max(11).required(),
    password: Yup.string().min(8).required()
})