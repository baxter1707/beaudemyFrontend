import * as actionTypes from './actions'


const initialState = {
  videos: [],
  studentid : '',
  courseName: '',
  tag: '',
  courseDescription: '',
  url:''
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.LOAD_VIDEO_LIST:
    return {
      ...state,
      videos : action.video
    }

    case actionTypes.STUDENT_SAVE:
    return {
      ...state,
      id : action.key,
      courseName : action.courseName,
      tag :action.tag,
      courseDescription: action.courseDescription,
      url : action.url
    }

    case actionTypes.MORE_INFO:
    return {
      ...state,
      id : action.id,
      studentid : action.studentid,
      courseName : action.courseName,
      tag :action.tag,
      courseDescription: action.courseDescription,
      url : action.url
    }
  }
  return state
}


export default reducer
