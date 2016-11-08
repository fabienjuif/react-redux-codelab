export const getUser = state => state.user
export const isConnected = state => getUser(state).uid !== undefined
