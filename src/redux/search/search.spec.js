import _ from 'lodash'
import reducer, { initState, initAction } from './search'
import {
  SET_TEXT, setText,
} from './search.actions'

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

describe('search reducer', () => {
  describe('Natures', () => {
    describe('reducer', () => {
      it('should be a function', () => {
        _.isFunction(reducer).should.be.true
      })

      it('should return an object', () => {
        const state = reducer({}, { type: 'UNKNOWN' })
        _.isObject(state).should.be.true
        _.isFunction(state).should.be.false
      })
    })

    describe('initState', () => {
      it('should be an object', () => {
        _.isObject(initState).should.be.true
        _.isFunction(initState).should.be.false
      })
    })

    describe('initAction', () => {
      it('should be an object', () => {
        _.isObject(initAction).should.be.true
        _.isFunction(initAction).should.be.false
      })

      it('should be UNKOWN', () => {
        initAction.type.should.be.deep.equals('UNKNOWN')
      })
    })
  })

  it('should initialize', () => {
    const state = reducer()
    state.should.be.deep.equals(initState)
    state.should.be.deep.equals({
      text: '',
    })
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

    it('should not override other fields', () => {
      const state = reducer({ other: 'field' }, setText('text'))
      state.should.be.deep.equals({
        other: 'field',
        text: 'text',
      })
    })

    it('should not mutate the state', () => {
      const inputState = { other: 'field' }
      const savedState = { ...inputState }
      const state = reducer(inputState, setText('text'))

      state.should.not.be.deep.equals(inputState)
      inputState.should.be.deep.equals(savedState)
    })
  })
})

/* eslint-enable no-unused-expressions */
