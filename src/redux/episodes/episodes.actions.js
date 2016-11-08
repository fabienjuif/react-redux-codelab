export const ADD_EPISODE = 'ADD_EPISODE'
export const addEpisode = (id) => {
  return {
    type: ADD_EPISODE,
    payload: id,
  }
}

export const ADD_EPISODES = 'ADD_EPISODES'
export const addEpisodes = (episodes) => {
  return {
    type: ADD_EPISODES,
    payload: episodes,
  }
}

export const REMOVE_EPISODE = 'REMOVE_EPISODE'
export const removeEpisode = (id) => {
  return {
    type: REMOVE_EPISODE,
    payload: id,
  }
}
