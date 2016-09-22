import reducer from './search'
import { setText } from './search.actions'
import {
  getSearch,
  getText,
} from './search.selectors'

/* eslint-env mocha */

const state = { nothing: 'tosee', search: reducer() }
state.search = reducer(state.search, setText('scrubs'))

describe('search selectors', () => {
  describe('getSearch selector', () => {
    it('should return the search part of the state', () => {
      const search = getSearch(state)
      search.should.be.deep.equals(state.search)
    })
  })

  describe('getText selector', () => {
    it('should return the texte part of the search state', () => {
      const text = getText(state)
      text.should.be.deep.equals(state.search.text)
    })
  })
})
