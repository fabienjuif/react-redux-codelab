import reducer, { initState } from './search'
import {
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
})
