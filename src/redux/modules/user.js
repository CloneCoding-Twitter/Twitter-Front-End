import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import { apis } from "../../shared/apis";

// actions
const SET_USER = "SET_USER";
const ID_CHECK = "ID_CHECK";
const NICK_CHECK = "NICK_CHECK";

// action creators
const setUser = createAction(SET_USER, (username) => ({ username }));
const idCheck = createAction(ID_CHECK, (result) => ({result}));
const nicknameCheck = createAction(NICK_CHECK, (result) => ({result}));

// initialState
const initialState = {
  user: null,
  loginId: "",
  nickname: "",
  idCheck: false,
  nicknameCheck: false,
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

const idCheckDB = (id) => {
  return function (dispatch) {
    console.log(id)
    apis
      .idCheck(id)
      .then((response) => {
        window.alert("사용 가능한 아이디 입니다.");
        dispatch(idCheck(response.data.result));
      })
      .catch((err) => {
        window.alert("이미 사용중인 아이디 입니다.");
        console.log(err);
      });
  }
}

const nicknameCheckDB = (nickname) => {
  return function (dispatch) {
    console.log(nickname)
    apis
      .nicknameCheck(nickname)
      .then((response) => {
        window.alert("사용 가능한 닉네임 입니다.");
        dispatch(nicknameCheck(response.data.result));
      })
      .catch((err) => {
        window.alert("이미 사용중인 닉네임 입니다.");
        console.log(err);
      });
  }
}

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.username;
        draft.is_login = true;
      }),

    [ID_CHECK]: (state, action) => 
      produce(state, (draft) => {
        draft.idCheck = action.payload.result
      }),

    [NICK_CHECK]: (state, action) => 
      produce(state, (draft) => {
      draft.nicknameCheck = action.payload.result
    }),
  },
  initialState
);

// action creator export
const actionCreators = {
  setUser,
  loginDB,
  signupDB,
  idCheckDB,
  nicknameCheckDB,
};

export { actionCreators };
