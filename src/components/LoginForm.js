import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Grid } from "../elements";
import { actionCreators as userActions } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { createTheme, ThemeProvider, TextField } from "@material-ui/core";

const theme = createTheme({
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
  loginId: yup
    .string("아이디를 입력해주세요.")
    .min(3, "아이디는 최소 3자 이상이어야 합니다.")
    .required("아이디 입력은 필수입니다."),
  password: yup
    .string("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .required("비밀번호 입력은 필수입니다."),
});

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const login = () => {
    console.log(login);
  };

  const formik = useFormik({
    initialValues: {
      loginId: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(userActions.loginDB(values));
    },
  });

  return (
    <Grid is_flex justify="center">
      <ThemeProvider theme={theme}>
        <form onSubmit={formik.handleSubmit}>
          <Grid is_flex justify="center" margin="0 0 20px 0">
            <TextField
              color="primary"
              fullWidth
              id="loginId"
              name="loginId"
              label="아이디"
              value={formik.values.loginId}
              onChange={formik.handleChange}
              error={formik.touched.loginId && Boolean(formik.errors.loginId)}
              helperText={formik.touched.loginId && formik.errors.loginId}
            />
          </Grid>
          <Grid is_flex justify="center" margin="20px 0 30px 0">
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
              _onClick={login}
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
