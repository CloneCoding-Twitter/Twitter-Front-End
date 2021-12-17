import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setToken } from "../../shared/token";
import { apis } from "../../shared/apis";

// actions
const SET_USER = "SET_USER";
const LOGOUT = "LOGOUT"
const ID_CHECK = "ID_CHECK";
const NICK_CHECK = "NICK_CHECK";

// action creators
const setUser = createAction(SET_USER, (loginId, nickname) => ({ loginId, nickname }));
const logout = createAction(LOGOUT, () => ({}));
const idCheck = createAction(ID_CHECK, (result) => ({result}));
const nicknameCheck = createAction(NICK_CHECK, (result) => ({result}));

// initialState
const initialState = {
  is_login: false,
  loginId: "",
  nickname: "",
  idCheck: false,
  nicknameCheck: false,
};

// middleware actions
const loginDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    console.log(userInfo)
    // const { loginId, password } = userInfo;
    const data = {
      loginId: userInfo.loginId,
      password: userInfo.password,
    };
    apis
      .login(data)
      .then((response) => {
        console.log(response.data)
        const token = response.data.token;
        setToken(token);
        localStorage.setItem("loginId", response.data.loginId);
        localStorage.setItem("nickname", response.data.nickname);

        dispatch(setUser(response.data.loginId, response.data.nickname));
        history.replace(`/home`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logout());
    history.replace("/");
    localStorage.clear();
  };
};

const signupDB = (userInfo) => {
  return function (dispatch, getState, { history }) {
    const { loginId, nickname, password, passwordCheck } = userInfo;
    const data = {
      loginId: loginId,
      nickname: nickname,
      password: password,
      passwordCheck: passwordCheck,
    };
    apis
      .signup(data)
      .then(() => {
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
      .then(() => {
        window.alert("사용 가능한 아이디 입니다.");
        dispatch(idCheck(true));
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
      .then(() => {
        window.alert("사용 가능한 닉네임 입니다.");
        dispatch(nicknameCheck(true));
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
        draft.nickname = action.payload.nickname;
        draft.loginId = action.payload.loginId;
        draft.is_login = true;
      }),

    [LOGOUT]: (state, action) =>
      produce(state, (draft) => {
        draft.loginId = null;
        draft.nickname = null;
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
  logoutDB,
  signupDB,
  idCheckDB,
  nicknameCheckDB,
};

export { actionCreators };
