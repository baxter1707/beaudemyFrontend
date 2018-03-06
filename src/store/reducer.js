import * as actionTypes from './actions'


const initialState = {
  videos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD_VIDEO_LIST:
    return {
      ...state,
      videos : action.video
    }
  }
  return state
}


export default reducer
