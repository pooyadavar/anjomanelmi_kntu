import * as Yup from "yup";

export const signupFormSchema = Yup.object().shape({
  phoneNumber: Yup.string().max(11).min(11).required(),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "رمز عبور مطابقت ندارد"
  ),
  role: Yup.string(),
});
