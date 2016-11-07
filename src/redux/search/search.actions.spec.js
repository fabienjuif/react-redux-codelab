import _ from 'lodash'
import { setText, SET_TEXT } from './search.actions'

/* eslint-env mocha */
/* eslint-disable no-unused-expressions */

describe('search actions', () => {
  describe(`${SET_TEXT} action`, () => {
    describe('Natures', () => {
      describe('setText function', () => {
        it('should be a function', () => {
          _.isFunction(setText).should.be.true
        })

        it('should return a new object', () => {
          const first = setText('text')
          const second = setText('text2')

          _.isObject(first).should.be.true
          _.isFunction(first).should.be.false
          _.isObject(second).should.be.true
          _.isFunction(second).should.be.false

          first.should.not.be.equals(second)
        })
      })

      describe('SET_TEXT constant', () => {
        it('should be a string', () => {
          _.isString(SET_TEXT).should.be.true
        })
      })
    })

    describe('returned values', () => {
      it('should return the right `type`', () => {
        const action = setText('text')
        action.type.should.be.equals(SET_TEXT)
      })

      it('should return the right `payload`', () => {
        const action = setText('text')
        action.payload.should.be.equals('text')
      })
    })
  })
})

/* eslint-enable no-unused-expressions */
