import { useCallback, useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { signupFormSchema } from "./schemas/signup-form.schema";
import { register, verify } from "./services";
import { useNavigate } from "react-router-dom";
import assets from "../../assets";

const OtpForm = () => {
  const navigate = useNavigate();
  const otpForm = useFormik({
    initialValues: {
      phoneNumber: localStorage.getItem("phoneNumber"),
      otpCode: "",
      role: "SCH",
    },
    async onSubmit(values) {
      console.log(values);
      try {
        const otpResponse = await verify(values);
        localStorage.setItem("accessToken", otpResponse.token.access);
        localStorage.setItem("refreshToken", otpResponse.token.refresh);
        console.log(otpResponse);
        navigate("/qbank");
      } catch (e) {
        console.log(e);
      }
    },
    validateOnChange: false,
  });
  return (
    <Box sx={{ width: "100%", pt: 5 }}>
      <Typography
        variant="h5"
        sx={{ color: "rgba(105, 105, 105, 1)", fontWeight: 700 }}
      >
        ثبت کد تأیید
      </Typography>
      {/* <Typography sx={{ mt: 1 }}>{otpForm.errors.otp}</Typography> */}
      <Typography sx={{ mt: 1 }}>
        کد تأیید را به شمارۀ {localStorage.getItem("phoneNumber")} ارسال
        کرده‌ایم. آن‌را این‌جا وارد کنید:
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
              id={"otpCode"}
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
};

export const  SignupForm = ({ next }) => {
  const signupForm = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      role: "SCH",
    },
    async onSubmit(values) {
      console.log(values);
      try {
        const signupResponse = await register(values);
        localStorage.setItem("phoneNumber", signupResponse.phone_number);
        localStorage.setItem("otp", signupResponse.otp_code);
        next();
      } catch (e) {
        console.log(e);
      }
    },
    validationSchema: signupFormSchema,
    validateOnChange: false,
  });
  return (
    <Box sx={{ width: "100vw" }}>
      <Typography
        variant="h5"
        sx={{ color: "rgba(105, 105, 105, 1)", fontWeight: 700 }}
      >
        ثبت‌نام در تستامینوفن
      </Typography>

      <Box
        sx={{
          backgroundColor: "rgba(246, 246, 246, 1)",
          p: 2,
          borderRadius: "20px",
          mt: 2,
        }}
      >
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            {signupForm.errors.phoneNumber ||
              signupForm.errors.password ||
              signupForm.errors.confirmPassword}
          </Typography>
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
            شماره همراه/ایمیل
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
              value={signupForm.values.phoneNumber}
              onChange={signupForm.handleChange}
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
            رمز عبور
          </Grid>
          <Grid item xs={12} md={9}>
            <TextField
              name={"password"}
              id={"password"}
              size="small"
              type="password"
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
              value={signupForm.values.password}
              onChange={signupForm.handleChange}
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
              value={signupForm.values.confirmPassword}
              onChange={signupForm.handleChange}
              type="password"
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
          onClick={async () => {
            const errors = await signupForm.validateForm();
            if (Object.values(errors).some((msg) => msg !== null)) return;
            await signupForm.submitForm();
          }}
        >
          بعدی
        </Button>
      </Box>
    </Box>
  );
};

export function SignupFlow() {
  const [step, setStep] = useState("signup");
  const goToOtp = useCallback(() => setStep("otp"), []);
  return step === "signup" ? <SignupForm next={goToOtp} /> : <OtpForm />;
}
