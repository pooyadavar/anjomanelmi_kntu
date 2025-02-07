import { useState } from "react";
import { Box, Typography, Grid, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { postForgetPassword, putResetPassword, verify } from "./services";
import { useNavigate } from "react-router-dom";
import { resetPassswordSchema } from "./schemas/reset-password.schema";

function ResetPassword() {
  const navigate = useNavigate();
  const resetpasswordForm = useFormik({
      initialValues: {
          password: "",
          confirmPassword: "",
      },
      async onSubmit(values) {
          console.log(values);
          try {
              await putResetPassword(values);
              navigate('/');
          } catch (e) {
              console.log(e);
          }
      },
      validationSchema: resetPassswordSchema,
      validateOnChange: false,
      validateOnBlur: true

  })
  return (
      <div>
          <Box
              sx={{
                  backgroundColor: "rgba(246, 246, 246, 1)",
                  p: 2,
                  borderRadius: "20px",
                  mt: 2,
              }}
          >
              <Grid container sx={{ p: 0.5, px: 3 }}>
                  <Grid
                      item
                      xs={12}
                      md={3}
                      sx={{
                          color: "rgba(57, 10, 77, 1)",
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center",
                      }}
                  >
                      رمز عبور
                  </Grid>
                  <Grid item xs={12} md={9}>
                      <TextField
                          name={"password"}
                          id={"password"}
                          size="small"
                          sx={{
                              backgroundColor: "rgba(255, 255, 255, 1)",
                              borderRadius: "15px",
                              border: 0,
                              height: "100%",
                              width: "100%",
                          }}
                          InputProps={{
                              style: {
                                  borderRadius: "15px",
                                  border: 0,
                              },
                              disableUnderline: true,
                          }}
                          onBlur={resetpasswordForm.handleBlur}
                          value={resetpasswordForm.values.password}
                          onChange={resetpasswordForm.handleChange}
                      ></TextField>
                  </Grid>
              </Grid>
              <Grid container sx={{ p: 0.5, px: 3 }}>
                  <Grid
                      item
                      xs={12}
                      md={3}
                      sx={{
                          color: "rgba(57, 10, 77, 1)",
                          fontWeight: 500,
                          display: "flex",
                          alignItems: "center",
                      }}
                  >
                      تکرار رمز عبور
                  </Grid>
                  <Grid item xs={12} md={9}>
                      <TextField
                          name={"confirmPassword"}
                          id={"confirmPassword"}
                          size="small"
                          sx={{
                              backgroundColor: "rgba(255, 255, 255, 1)",
                              borderRadius: "15px",
                              border: 0,
                              height: "100%",
                              width: "100%",
                          }}
                          InputProps={{
                              style: {
                                  borderRadius: "15px",
                                  border: 0,
                              },
                              disableUnderline: true,
                          }}
                          type="password"
                          value={resetpasswordForm.values.confirmPassword}
                          onChange={resetpasswordForm.handleChange}
                          onBlur={resetpasswordForm.handleBlur}
                      ></TextField>
                  </Grid>
              </Grid>
              <Box
                  sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      mt: 1.5,
                  }}
              >
                  <Button
                      sx={{
                          background: "rgba(240, 240, 240, 1)",
                          border: "3px solid rgba(170, 123, 189, 1)",
                          color: "rgba(116, 72, 132, 1)",
                          borderRadius: "100px",
                          py: 0.3,
                      }}
                      onClick={async () => {
                        console.log(resetpasswordForm.values);
                          const errors = await resetpasswordForm.validateForm();
                          console.log(Object.values(errors))
                          if (Object.values(errors).some(msg => msg !== undefined)) return;
                          await resetpasswordForm.submitForm();
                      }}
                  >
                      تایید
                  </Button>
              </Box>

          </Box>
      </div>
  )
}

function OtpInput({ phoneNumber, onPrevious, onNext }) {
  const otpForm = useFormik({
    initialValues: {
      phoneNumber,
      otpCode: "",
      // role: "SCH",
    },
    async onSubmit(values) {
      console.log(values);
      try {
        const otpResponse = await verify(values);
        localStorage.setItem("accessToken", otpResponse.token.access);
        localStorage.setItem("refreshToken", otpResponse.token.refresh);
        console.log(otpResponse);
        onNext();
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Typography
        variant="h5"
        sx={{ color: "rgba(105, 105, 105, 1)", fontWeight: 700 }}
      >
        ثبت کد تأیید
      </Typography>
      <Typography sx={{ mt: 1 }}>
        کد تأیید را به شمارۀ {phoneNumber} ارسال کرده‌ایم. آن‌را این‌جا وارد
        کنید:
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgba(246, 246, 246, 1)",
          p: 2,
          borderRadius: "20px",
          mt: 2,
        }}
      >
        <Grid container sx={{ p: 0.5, px: 3 }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              color: "rgba(57, 10, 77, 1)",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            کد تایید
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField
              name={"otpCode"}
              id={"otpCodeForget"}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "15px",
                border: 0,
                height: "100%",
                width: "100%",
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  border: 0,
                },
                disableUnderline: true,
              }}
              value={otpForm.values.otpCode}
              onChange={otpForm.handleChange}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 1.5,
        }}
      >
        <Button
          sx={{
            background: "rgba(240, 240, 240, 1)",
            border: "3px solid rgba(170, 123, 189, 1)",
            color: "rgba(116, 72, 132, 1)",
            borderRadius: "100px",
            py: 0.3,
          }}
          onClick={onPrevious}
        >
          بازگشت
        </Button>
        <Button
          sx={{
            background:
              "linear-gradient(79.97deg, #390A4D -12.66%, #9B70AA 90.25%)",
            border: "3px solid rgba(57, 10, 77, 1)",
            color: "white",
            borderRadius: "100px",
            py: 0.3,
            mr: 1,
          }}
          onClick={async () => {
            const otpError = await otpForm.validateForm();
            if (Object.keys(otpError).length !== 0) return;
            await otpForm.submitForm();
          }}
        >
          تایید
        </Button>
      </Box>
    </Box>
  );
}

function PhoneInput({ phoneNumber, onChange, onSubmit }) {
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Typography
        variant="h5"
        sx={{ color: "rgba(105, 105, 105, 1)", fontWeight: 700 }}
      >
        فراموشی رمز
      </Typography>
      <Typography sx={{ mt: 1 }}>
        شماره تلفن خود را وارد کنید. برای شما کد احراز هویتی ارسال می‌گردد و بعد
        از آن مجاز به تعیین دوباره رمز عبور خود هستید
      </Typography>
      <Box
        sx={{
          backgroundColor: "rgba(246, 246, 246, 1)",
          p: 2,
          borderRadius: "20px",
          mt: 2,
        }}
      >
        <Grid container sx={{ p: 0.5, px: 3 }}>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              color: "rgba(57, 10, 77, 1)",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
            }}
          >
            شماره تلفن
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField
              name={"phoneNumber"}
              id={"phoneNumber"}
              size="small"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 1)",
                borderRadius: "15px",
                border: 0,
                height: "100%",
                width: "100%",
              }}
              InputProps={{
                style: {
                  borderRadius: "15px",
                  border: 0,
                },
                disableUnderline: true,
              }}
              value={phoneNumber}
              onChange={onChange}
            ></TextField>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          mt: 1.5,
        }}
      >
        <Button
          sx={{
            background: "rgba(240, 240, 240, 1)",
            border: "3px solid rgba(170, 123, 189, 1)",
            color: "rgba(116, 72, 132, 1)",
            borderRadius: "100px",
            py: 0.3,
          }}
        >
          بازگشت
        </Button>
        <Button
          sx={{
            background:
              "linear-gradient(79.97deg, #390A4D -12.66%, #9B70AA 90.25%)",
            border: "3px solid rgba(57, 10, 77, 1)",
            color: "white",
            borderRadius: "100px",
            py: 0.3,
            mr: 1,
          }}
          onClick={onSubmit}
        >
          تایید
        </Button>
      </Box>
    </Box>
  );
}

export default function ForgetPassword() {
  const phoneNumberForm = useFormik({
    initialValues: {
      phoneNumber: "",
      role: 'SCH'
    },
    async onSubmit(values) {
      try {
        await postForgetPassword(values);
        setStep("otp");
      } catch (e) {
        console.log(e);
      }
    },
  });
  const [step, setStep] = useState("phoneNumber");
  switch (step) {
    case "phoneNumber":
      return (
        <PhoneInput
          onChange={phoneNumberForm.handleChange}
          onSubmit={phoneNumberForm.handleSubmit}
          phoneNumber={phoneNumberForm.values.phoneNumber}
        />
      );
    case "otp":
      return (
        <OtpInput
          phoneNumber={phoneNumberForm.values.phoneNumber}
          onPrevious={() => setStep("phoneNumber")}
          onNext={() => setStep('resetPassword')}
        />
      );
    default:
      return <ResetPassword />;
  }
}
