import axios from 'axios'
export const LOAD_VIDEO_LIST = "LOAD_VIDEO_LIST"

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
