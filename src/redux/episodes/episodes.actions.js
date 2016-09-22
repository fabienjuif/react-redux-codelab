export const ADD_EPISODE = 'ADD_EPISODE'
export const addEpisode = (id) => {
  return {
    type: ADD_EPISODE,
    payload: id,
  }
}
