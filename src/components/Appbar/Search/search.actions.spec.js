/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

import _ from 'lodash'
import { fetchTVShows } from './search.actions'

describe('search actions', () => {
  describe('fetchTVShows action', () => {
    describe('Natures', () => {
      it('should be a function', () => {
        _.isFunction(fetchTVShows).should.be.true
      })

      it('should return a new function', () => {
        const first = fetchTVShows('text')
        const second = fetchTVShows('text2')

        _.isFunction(first).should.be.true
        _.isFunction(second).should.be.true

        first.should.not.be.equals(second)
      })
    })
  })

  describe('returned values', () => {
    beforeEach(() => {
      global.fetch = () => Promise.resolve({
        data: '[{ "id": 1, "title": "first" },{ "id": 3, "title": "third" },{ "id": 2, "title": "second" }]',
        json: () => {
          return [
            { show: { id: 1, title: 'first' } },
            { show: { id: 3, title: 'third' } },
            { show: { id: 2, title: 'second' } },
          ]
        },
      })
    })

    it('should dispatch a `setResults` action', (done) => {
      const embedded = fetchTVShows('text')
      let results = []
      let called = false
      embedded((action) => {
        if (action.type === 'SET_RESULTS') {
          called = true
          results = action.payload
        }
      })

      // Callback FIFO
      setTimeout(() => {
        called.should.be.true
        results.should.be.deep.equals([
          1,
          3,
          2,
        ])

        done()
      }, 0)
    })

    it('should dispatch some `addTVShow` action', (done) => {
      const embedded = fetchTVShows('text')
      const shows = []
      let called = false
      embedded((action) => {
        if (action.type === 'ADD_TVSHOW') {
          called = true
          shows.push(action.payload)
        }
      })

      // Callback FIFO
      setTimeout(() => {
        called.should.be.true
        shows.should.be.deep.equals([
          { id: 1, title: 'first' },
          { id: 3, title: 'third' },
          { id: 2, title: 'second' },
        ])

        done()
      }, 0)
    })
  })
})

/* eslint-enable no-unused-expressions */
