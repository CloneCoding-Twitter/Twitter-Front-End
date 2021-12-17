import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { apis } from "../../shared/apis";

// action
const GET_ARTICLE = 'GET_ARTICLE';
const ADD_ARTICLE = 'ADD_ARTICLE';
const EDIT_ARTICLE = 'EDIT_ARTICLE';
const DELETE_ARTICLE = "DELETE_ARTICLE";

// action creators
const getArticle = createAction(GET_ARTICLE, (list) => ({list}));
const addArticle = createAction(ADD_ARTICLE, (article) => ({article}));
const editArticle = createAction(EDIT_ARTICLE, (id, article) => ({id, article}));
const deleteArticle = createAction(DELETE_ARTICLE, (id) => ({id}));

// initailState
const initialState = {
  list: [],
};

// const initialArticle = {
// id: 1,
// loginId: '',
//   nickname: '',
//   content: '',
//   image: ''
// }

// middlewares
const getArticleDB = () => {
  return async function(dispatch, getState, {history}) {
    console.log('세번재')
    await apis
      .articles()
      .then(res => {
        console.log(res.data.result);
        dispatch(getArticle(res.data.result));
      }).catch(err => {
        console.log('게시물 조회 오류', err)
      })

  }
}

const getDetailDB = (article_id) => {
  return async function(dispatch, getState, {history}) {
    console.log(article_id);

    await apis
      .article(article_id)
      .then(res => {
        console.log(res.data.result);
        dispatch(getArticle([res.data.result]));
      })
      .catch(err => {
        console.log('게시물상세조회', err);
      })
  }
}


const addArticleDB = (content, image) => {
  return async function(dispatch, getState, {history}) {
    const form = new FormData();
    form.append('img', image);
    form.append('content', content);

    // console.log(content, image) 확인완료
    // axios 요청
    await apis
      .addArticle(form)
      .then((res) => {
        console.log(res.data);
        dispatch(addArticle(res.data.article));
      }).catch(err => {
        console.log("게시물 등록 오류", err)
      })

  }
}

const editArticleDB = (id, content, image) => {
  return async function(dispatch, getState, {history}) {
    const form = new FormData();
    form.append('image', image);
    form.append('content', content);

    // console.log(content, image) 확인완료
    // axios 요청
    
    await apis
      .editArticle(id,form)
      .then(res => {
        console.log(res.data.article);
        dispatch(editArticle(res.data.article));
      }).catch(err => {
        console.log("게시물 수정 오류", err)
      })

  }
}

const deleteArticleDB = (id) => {
  return async function(dispatch, getState, {history}) {
    // console.log(id) 확인완료
    // axios 요청
    
    await apis
      .deleteArticle(id)
      .then(() => {
        dispatch(deleteArticle(id));
        history.replace('/home')
      })
      .catch(err => {
        console.log('게시물 삭제 오류', err)
      })

  }
}

export default handleActions(
  {
    [GET_ARTICLE]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.list);

        // list에 push를 하기 때문에 home으로 돌아갈때마다
        // 응답이 누적되어 중복되기 때문에 중복제거를 해준다.

        draft.list = draft.list.reduce((acc, cur) => {
          // findIndex로 누산값(cur)에 현재값이 이미 들어있나 확인해요!
          // 있으면? 덮어쓰고, 없으면? 넣어주기!
          if (acc.findIndex((a) => a.id === cur.id) === -1){
            return [...acc, cur];
          }else{
            acc[acc.findIndex((a) => a.id === cur.id)] = cur;
            return acc;
          }
        }, []);

        
      }),

    [ADD_ARTICLE]: (state, action) => 
      produce(state, (draft) => {
        draft.list.unshift(action.payload.article);
      }),

    [EDIT_ARTICLE]: (state, action) => 
      produce(state, (draft) => {
        const idx = draft.list.findIndex(a => 
          a.id === action.payload.id
        );
        console.log(idx);
        console.log({...draft.list[idx], ...action.payload.article});
        draft.list[idx] = {...draft.list[idx], ...action.payload.article};
      }),

    [DELETE_ARTICLE]: (state, action) => 
      produce(state, (draft) => {
        let deleted_list = draft.list.filter(
          (a) => a.id !== action.payload.id
        );

        draft.list = deleted_list;
      }),
  },
  initialState
);

const actionCreators = {
  getArticleDB,
  getDetailDB,
  addArticleDB,
  editArticleDB,
  deleteArticleDB,
}

export {actionCreators};