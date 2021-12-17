import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action
const SET_PREVIEW = 'SETPREVIEW';

// action creators
export const setPreview = createAction(SET_PREVIEW, (url) => ({url}));

// initialState
const initialState = {
  preview_url: null
}

export default handleActions(
  {
    [SET_PREVIEW]: (state, action) => 
      produce(state, (draft) => {
        draft.preview_url = action.payload.url;
        // console.log(action.payload.url)
        // console.log('reducer')
        // console.log(state.preview_url);
      })
  },
  initialState
);

const actionCreators = {
  setPreview,
};

export { actionCreators };