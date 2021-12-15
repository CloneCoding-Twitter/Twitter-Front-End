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
    .max(12, "아이디는 최대 12자 이하이어야 합니다.")
    .required("아이디 입력은 필수입니다.")
    .matches(/[a-z]+[A-Z0-9]*$/, "영대소문, 숫자 혼합 3~12자 입력해주세요."),
  nickname: yup
    .string("닉네임을 입력해주세요.")
    .min(3, "닉네임은 최소 8자 이상이어야 합니다.")
    .max(6, "닉네임은 최대 6자 이하이어야 합니다.")
    .required("닉네임 입력은 필수입니다.")
    .matches(/[a-z]+[A-Z0-9]*$/, "영대소문, 숫자 혼합 3~6자 입력해주세요."),
  password: yup
    .string("비밀번호를 입력해주세요.")
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자 이하이어야 합니다.")
    .required("비밀번호 입력은 필수입니다.")
    .matches(/[a-z]+[A-Z0-9]*$/, "영대소문, 숫자 혼합 3~20자 입력해주세요."),
  passwordCheck: yup
    .string()
    .min(8, "비밀번호는 최소 8자 이상이어야 합니다.")
    .max(20, "비밀번호는 최대 20자 이하이어야 합니다.")
    .required("비밀번호 확인은 필수입니다.")
    .oneOf(
      [yup.ref("password"), null],
      "비밀번호가 다릅니다. 다시 입력해 주세요."
    ),
});

const SignUpForm = (props) => {
  const dispatch = useDispatch();

  const signup = () => {
    console.log(signup);
  };

  const formik = useFormik({
    initialValues: {
      loginId: "",
      nickname: "",
      password: "",
      passwordCheck: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(userActions.signupDB(values));
    },
  });

  return (
    <Grid is_flex justify="center">
      <ThemeProvider theme={theme}>
        <form onSubmit={formik.handleSubmit}>
          <Grid is_flex justify="flex-start" margin="0 0 15px 0">
            <TextField
              color="primary"
              style={{ width: "63%" }}
              id="loginId"
              name="loginId"
              label="아이디"
              value={formik.values.loginId}
              onChange={formik.handleChange}
              error={formik.touched.loginId && Boolean(formik.errors.loginId)}
              helperText={formik.touched.loginId && formik.errors.loginId}
            />
            <Button
              is_blackHover
              width="33%"
              height="34px"
              margin="14px 0 0 4%"
              font_color="#fff"
              bg="#000"
              font_size="12px"
              bold="900"
            >
              중복확인
            </Button>
          </Grid>
          <Grid is_flex justify="flex-start" margin="15px 0">
            <TextField
              color="primary"
              style={{ width: "63%" }}
              id="nickname"
              name="nickname"
              label="닉네임"
              value={formik.values.nickname}
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
            />
            <Button
              is_blackHover
              width="33%"
              height="34px"
              margin="14px 0 0 4%"
              font_color="#fff"
              bg="#000"
              font_size="12px"
              bold="900"
            >
              중복확인
            </Button>
          </Grid>
          <Grid is_flex justify="center" margin="15px 0">
            <TextField
              fullWidth
              id="password"
              name="password"
              label="비밀번호"
              type="new-password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid is_flex justify="center" margin="15px 0 30px 0">
            <TextField
              fullWidth
              id="passwordCheck"
              name="passwordCheck"
              label="비밀번호 확인"
              type="new-password"
              value={formik.values.passwordCheck}
              onChange={formik.handleChange}
              error={
                formik.touched.passwordCheck &&
                Boolean(formik.errors.passwordCheck)
              }
              helperText={
                formik.touched.passwordCheck && formik.errors.passwordCheck
              }
            />
          </Grid>
          <Grid is_flex justify="center">
            <Button
              is_tweeterHover
              width="300px"
              height="42px"
              font_color="#fff"
              font_size="15px"
              bold="900"
              _onClick={signup}
            >
              가입하기
            </Button>
          </Grid>
        </form>
      </ThemeProvider>
    </Grid>
  );
};

export default SignUpForm;
