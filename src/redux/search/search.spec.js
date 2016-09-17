import reducer, { initState } from './search'
import {
  SET_RESULTS, setResults,
  SET_TEXT, setText,
} from './search.actions'

/* eslint-env mocha */

describe('search reducer', () => {
  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
  })

  describe(`${SET_TEXT} action`, () => {
    it('should set the text field', () => {
      let state = reducer(initState, setText(20))
      state.should.be.deep.equals({
        ...initState,
        text: 20,
      })

      state = reducer(state, setText('scrubs'))
      state.should.be.deep.equals({
        ...initState,
        text: 'scrubs',
      })
    })
  })

  describe(`${SET_RESULTS} action`, () => {
    it('should set a new results', () => {
      let state = reducer(initState, setResults(10))
      state.should.be.deep.equals({
        ...initState,
        results: 10,
      })

      state = reducer(state, setResults(['a', 'b']))
      state.should.be.deep.equals({
        ...initState,
        results: ['a', 'b'],
      })
    })
  })
})
