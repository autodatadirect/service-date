import { formatServerDate, formatServerDateTime, formatDisplayDateTime, formatDisplayDate } from './'

const isFunction = x => typeof x === 'function'

describe('dateUtils', () => {
  describe('formatDisplayDate', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDate)).toBeTruthy()
    })
    it('returns 11/15/2020 when passed new Date(2020, 10, 15)', () => {
      expect(formatDisplayDate(new Date(2020, 10, 15))).toEqual('11/15/2020')
    })
  })

  describe('formatServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDateTime)).toBeTruthy()
    })
    it('returns 11/15/2020 6:23 AM when passed new Date(2020, 10, 15, 6, 23)', () => {
      expect(formatServerDateTime(new Date(2020, 10, 15, 6, 23))).toEqual('2020-11-15T06:23:00.000Z')
    })
  })

  describe('formatServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDateTime)).toBeTruthy()
    })
    it('returns 11/15/2020 6:23 AM when passed new Date(2020, 10, 15, 6, 23)', () => {
      expect(formatDisplayDateTime(new Date(2020, 10, 15, 6, 23))).toEqual('11/15/2020 6:23 AM')
    })
  })

  describe('formatServerDate', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDate)).toBeTruthy()
    })
    it('returns 2020-11-15 when passed in new Date(2020, 10, 15)', () => {
      expect(formatServerDate(new Date(2020, 10, 15))).toEqual('2020-11-15')
    })
  })
})
