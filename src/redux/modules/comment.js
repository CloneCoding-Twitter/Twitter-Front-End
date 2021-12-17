import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import { apis } from "../../shared/apis";

// action
const GET_COMMNET = 'GET_COMMNET';
const ADD_COMMENT = 'ADD_COMMENT';
const DELETE_COMMNET = 'DELETE_COMMNET';

// action creators
const getComment = createAction(GET_COMMNET, (id, list) => ({id, list}));
const addComment = createAction(ADD_COMMENT, (id, comment) => ({id, comment}));
const deleteComment = createAction(DELETE_COMMNET, (id) => ({id}));

// initailState
const initialState = {
  list: [],
}

// const initialComment = {
//   id: '',
//   comment:'',
//   loginId:'',
//   nickname:'',
// }

// middlewares
const getCommentDB = (articleId) => {
  return async function(dispatch) {
    if(!articleId){
      return;
    }

    await apis
      .comments(articleId)
      .then(res => {
        console.log(res.data.result)
        dispatch(getComment(articleId, res.data.result));
      })
      .catch(err => {
        console.log('댓글조회오류', err);
      })
  }
}

const addCommentDB = (articleId, comment) => {
  return async function(dispatch) {

    await apis
      .addCom(articleId, comment)
      .then(res => {
        console.log('댓글 작성', res);
        dispatch(addComment(articleId, res.data.result));
      })
      .catch(err => {
        console.log('댓글등록오류', err);
      })
  }
}

const deleteCommentDB = (articleId) => {
  return async function(dispatch) {
    await apis 
      .deleteCom(articleId)
      .then(res => {
        console.log(res)
        dispatch(deleteComment(articleId));
      })
      .catch(err => {
        console.log('댓글삭세오류', err);
      })
  }    
}

// reducer
export default handleActions(
  {
    [GET_COMMNET]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.list)
        // draft.list[action.payload.id] = action.payload.list;
        draft.list = action.payload.list;
      }),

    [ADD_COMMENT]: (state, action) => 
      produce(state, (draft) => {
        console.log(action.payload.comment);
        // draft.list[action.payload.id] = action.payload.comment
        draft.list.push(action.payload.comment);
      }),

    [DELETE_COMMNET]: (state, action) =>
      produce(state, (draft) => {
        const new_list = draft.list.filter(l => l.id !== action.payload.id);
        console.log(new_list);
        draft.list[action.payload.id] = new_list;
      }),
  },
  initialState
)

const actionCreators = {
  getCommentDB,
  addCommentDB,
  deleteCommentDB
}

export {actionCreators}