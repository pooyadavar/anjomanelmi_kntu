
import * as Yup from "yup";

export const resetPassswordSchema = Yup.object().shape({
    password : Yup.string().min(8).required(),
    confirmPassword:Yup.string().oneOf(
        [Yup.ref("password") , null],
        "رمز عبور مطابقت ندارد"
    ),
    role: Yup.string(),    
});