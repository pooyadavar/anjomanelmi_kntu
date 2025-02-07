import { useState } from "react";
import { Box, Typography, Grid, TextField, Button } from "@mui/material";
import { useFormik } from "formik";
import { loginFormSchema } from "./schemas/login-form.schema";
import { login } from "./services";
import { useNavigate } from "react-router-dom";

export default function LoginForm({onSignup, onForgetPassword}) {
  const navigate = useNavigate();
  const [hasLoginError, setHasLoginError] = useState(false);
  const loginForm = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
      role: "SCH",
    },
    async onSubmit(values) {
      setHasLoginError(false);
      console.log(values);
      try {
        const loginResponse = await login(values);
        localStorage.setItem("accessToken", loginResponse.token.access);
        localStorage.setItem("refreshToken", loginResponse.token.refresh);
        navigate("/qbank");
      } catch (e) {
        setHasLoginError(true);
        console.log(e);
      }
    },
    validateOnBlur: true,
    validationSchema: loginFormSchema,
  });

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          py:"3px",
          color : "white",
          backgroundColor:"#e69597",
          display: hasLoginError ? "flex" : "none",
          justifyContent: "center",
          borderRadius:"10px"
        }}
      >
        شماره تلفن یا رمز عبور شما نامعتبر است.
      </Box>

      <Typography
        variant="h5"
        sx={{
          color: "rgba(105, 105, 105, 1)",
          fontWeight: 700,
          mt: 2,
        }}
      >
        به تستامینوفن خوش آمدید!
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
              onBlur={loginForm.handleBlur}
              value={loginForm.values.phoneNumber}
              onChange={loginForm.handleChange}
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
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              onBlur={loginForm.handleBlur}
            ></TextField>
          </Grid>
        </Grid>
        <Typography
          sx={{
            color: "rgba(116, 72, 132, 1)",
            fontWeight: 600,
            mt: 1,
            mr: 1,
            cursor: 'pointer'
          }}
          onClick={onForgetPassword}
        >
          رمز عبور خود را فراموش کرده‌اید؟ کلیک کنید
        </Typography>
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
          onClick={onSignup}
        >
          ثبت‌نام
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
            const errors = await loginForm.validateForm();
            if (Object.values(errors).some((msg) => msg !== undefined)) return;
            await loginForm.submitForm();
          }}
        >
          ورود
        </Button>
      </Box>
    </Box>
  );
}
