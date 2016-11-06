import pick from 'lodash/pick'
import { createSelector } from 'reselect'
import { getId } from 'redux/router'
import { helpers, getTVShows } from 'redux/tvshows'

const getRawTvShow = createSelector(
  [getTVShows, getId],
  (tvshows, id) => {
    return helpers.getById({ tvshows }, Number(id))
  }
)

export const getTvShow = createSelector(
  [getRawTvShow],
  (rawTvShow) => {
    return pick(rawTvShow, ['id', 'name', 'image', 'summary'])
  }
)
