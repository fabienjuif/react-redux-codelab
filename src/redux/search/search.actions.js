export const SET_RESULTS = 'SET_RESULTS'
export const setResults = (results) => {
  return {
    type: SET_RESULTS,
    payload: results,
  }
}

export const SET_TEXT = 'SET_TEXT'
export const setText = (text) => {
  return {
    type: SET_TEXT,
    payload: text,
  }
}
