export const SET_TEXT = 'SET_TEXT'
export const setText = (text) => {
  return {
    type: SET_TEXT,
    payload: text,
  }
}
