import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import apis from "../../shared/apis";

// actions
const SET_USER = "SET_USER";

// action creators
const setUser = createAction(SET_USER, (username) => ({ username }));

// initialState
const initialState = {
  user: null,
  username: "",
  is_login: false,
};

// middleware actions
const loginDB = (userinfo) => {
  return function (dispatch, getState, { history }) {
    const { loginId, password } = userinfo;
    const data = {
      loginId: loginId,
      password: password,
    };
    apis
      .login(data)
      .then((response) => {
        const token = response.data.token;
        setToken(token);
        dispatch(setUser(data.loginId));
        history.push(`/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const signupDB = (userinfo) => {
  return function (dispatch, getState, { history }) {
    const { loginId, nickname, password, passwordCheck } = userinfo;
    const data = {
      loginId: loginId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };
    apis
      .signup(data)
      .then((response) => {
        window.alert("회원가입 성공 🔥");
        history.push("/logincard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.username);
        draft.username = action.payload.username;
        draft.is_login = true;
      }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  loginDB,
  signupDB,
};

export { actionCreators };
