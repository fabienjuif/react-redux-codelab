export const getSearch = state => state.search
export const getResults = state => getSearch(state).results
export const getText = state => getSearch(state).text
