import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid } from "../elements";
import { createMuiTheme, ThemeProvider, TextField } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1DA1F2",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

const validationSchema = yup.object({
  email: yup
    .string("이메일을 입력해주세요.")
    .email("이메일을 입력해주세요.")
    .required("이메일 입력은 필수입니다."),
  password: yup
    .string("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .required("비밀번호 입력은 필수입니다."),
});

const LoginForm = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log(props.onClick);

  return (
    <Grid is_flex justify="center">
      <ThemeProvider theme={theme}>
        <form onSubmit={formik.handleSubmit}>
          <Grid is_flex justify="center">
            <TextField
              color="primary"
              fullWidth
              id="email"
              name="email"
              label="이메일"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid is_flex justify="center" margin="20px 0">
            <TextField
              fullWidth
              id="password"
              name="password"
              label="비밀번호"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid is_flex justify="center">
            <Button
              is_tweeterHover
              width="300px"
              height="42px"
              font_color="#ffffff"
              font_size="15px"
              bold="900"
            >
              로그인
            </Button>
          </Grid>
        </form>
      </ThemeProvider>
    </Grid>
  );
};

export default LoginForm;
