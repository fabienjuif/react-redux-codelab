/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import _ from 'lodash'
import { getEpisodes } from './episodes.selectors'

describe('episodes selectors', () => {
  describe('Natures', () => {
    it('should be a function', () => {
      _.isFunction(getEpisodes).should.be.true
    })

    it('should return an object', () => {
      const raw = {
        router: { params: { id: '12' } },
        tvshows: [
          { id: 12, episodes: [{ id: 10, title: 'title10' }] },
        ],
      }

      const episodes = getEpisodes(raw)

      _.isObject(episodes).should.be.true
      _.isFunction(episodes).should.be.false
    })
  })

  describe('getEpisodes', () => {
    it('should return episodes from the right tvshow', () => {
      const raw = {
        router: { params: { id: '12' } },
        tvshows: [
          { id: 2, episodes: [{ id: 1, title: 'title1' }] },
          { id: 12, episodes: [{ id: 10, title: 'title10' }] },
        ],
      }

      const episodes = getEpisodes(raw)
      episodes.should.be.deep.equals([{ id: 10, title: 'title10' }])
    })

    it('should return episodes ordered by season then by number (desc)', () => {
      const raw = {
        router: { params: { id: '89' } },
        tvshows: [
          {
            id: 89,
            episodes: [
              { id: 10, title: 'title10 S02E08', season: 2, number: 8 },
              { id: 11, title: 'title11 S03E04', season: 3, number: 4 },
              { id: 12, title: 'title12 S03E03', season: 3, number: 3 },
              { id: 14, title: 'title14 S02E10', season: 2, number: 10 },
              { id: 13, title: 'title13 S02E11', season: 2, number: 11 },
            ],
          },
        ],
      }

      const episodes = getEpisodes(raw)
      episodes.should.be.deep.equals([
        { id: 11, title: 'title11 S03E04', season: 3, number: 4 },
        { id: 12, title: 'title12 S03E03', season: 3, number: 3 },
        { id: 13, title: 'title13 S02E11', season: 2, number: 11 },
        { id: 14, title: 'title14 S02E10', season: 2, number: 10 },
        { id: 10, title: 'title10 S02E08', season: 2, number: 8 },
      ])
    })
  })
})

/* eslint-enable no-unused-expressions */
