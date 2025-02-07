import { httpClient } from "../../shared/http-client";

const signupForm2ApiRegisterBody = (signupForm) => ({
  phone_number: signupForm.phoneNumber,
  password: signupForm.password,
  role: signupForm.role,
});

const otpform2ApiRegisterBody = (otpForm) => ({
  phone_number: otpForm.phoneNumber,
  otp_code: otpForm.otpCode,
  role: otpForm.role
})

export const register = async (signupForm) => {
  const response = await httpClient.post(
    "user/register/",
    signupForm2ApiRegisterBody(signupForm)
  );
  return response.data;
};

export const verify = async (otpForm) => {
  const response = await httpClient.post(
    "user/verify/",
    otpform2ApiRegisterBody(otpForm)
  )
  return response.data;
}
const loginForm2ApiLoginBody = (loginForm) => ({
  phone_number: loginForm.phoneNumber,
  password: loginForm.password,
  role: loginForm.role,
});

export const login = async (loginForm) => {
  const response = await httpClient.post(
    "user/login/",
    loginForm2ApiLoginBody(loginForm)
  );
  return response.data;
};

const forgetPassword2ApiBody = (forgetPasswordForm) => ({
  phone_number: forgetPasswordForm.phoneNumber,
  role: forgetPasswordForm.role
})

export const postForgetPassword = async (forgetPasswordForm) => {
  const response = await httpClient.post(
    "user/forget_password/",
    forgetPassword2ApiBody(forgetPasswordForm)
  );
  return response.data;
}

const resetPassword2ApiBody = (resetPasswordForm) => ({
  password: resetPasswordForm.password
})
export const putResetPassword = async (resetPasswordForm) => {
  const response = await httpClient.put('user/forget_password/', resetPassword2ApiBody(resetPasswordForm));
  return response.data;
}