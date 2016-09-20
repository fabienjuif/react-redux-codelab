/* global firebase */
export const login = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider).then((result) => {
    console.log(result)
  }).catch((error) => {
    console.log(error)
  })
}
