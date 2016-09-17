export const SET_RESULTS = 'SET_RESULTS'
export const setResults = (tvshows) => {
  return {
    type: SET_RESULTS,
    payload: tvshows,
  }
}

export const SET_SEARCH = 'SET_SEARCH'
export const setSearch = (text) => {
  return {
    type: SET_SEARCH,
    payload: text,
  }
}
