import { setText, setResults } from 'redux/search'
import { API_URL } from 'redux/constants'
import { addSeen } from 'redux/seen'

export const search = value => (dispatch) => {
  dispatch(setText(value))

  fetch(`${API_URL}search/shows?q=${value}`)
    .then(raw => raw.json())
    .then(shows => dispatch(setResults(shows)))
}


// TODO : move it
/* global firebase */
// TODO : Wait for connexion
export const connectFirebase = () => (dispatch) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const ref = firebase.database().ref(user.uid)

      ref.on('child_added', (data) => {
        dispatch(addSeen(data.val()))
      })
    }
  })

  // TODO
  /*
  ref.on('child_changed', function(data) {
    setCommentValues(postElement, data.key, data.val().text, data.val().author);
  });

  ref.on('child_removed', function(data) {
    deleteComment(postElement, data.key);
  });
  */
}
