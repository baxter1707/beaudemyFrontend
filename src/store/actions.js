import axios from 'axios'
export const LOAD_VIDEO_LIST = "LOAD_VIDEO_LIST"
export const STUDENT_SAVE = "STUDENT_SAVE"
export const MORE_INFO = "MORE_INFO"

export const loadTeacherVideos = () => {
  return dispatch => {

    let url = 'http://localhost:4000/jsonVideos'
    fetch(url)
    .then(response => response.json())
    .then(json => dispatch(loadVideos(json["videos"])))

  }
}

export const loadVideos = (video, id) => {
  return {
    type : LOAD_VIDEO_LIST,
    video : video,
    id : id
  }
}

export const postStudentVideo = (courseName,studentid,tag,courseDescription,url) => {
  return dispatch => {
    axios.post('http://localhost:4000/StudentSubscribe', {
          courseName: courseName,
          studentid: studentid,
          tag: tag,
          courseDescription: courseDescription,
          url : url,
        }).then(res => alert(res))
        .catch(err => alert(err))}
  }
