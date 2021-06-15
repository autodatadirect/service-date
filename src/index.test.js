import { formatServerDate, formatServerDateTime, formatDisplayDateTime, formatDisplayDate, parseServerDate, parseServerDateTime } from './'

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

  describe('formatDisplayDateTime', () => {
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

  describe('parseServerDate', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDate)).toBeTruthy()
    })
    it('returns new Date(2020, 10, 15, 5) when passed in 2020-11-15', () => {
      expect(parseServerDate('2020-11-15')).toEqual(new Date(2020, 10, 15, 5))
    })
    it('ignores timezone', () => {
      expect(parseServerDate('2020-11-15:New_York')).toEqual(new Date(2020, 10, 15, 5))
    })
  })

  describe('parseServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDateTime)).toBeTruthy()
    })
    it('returns new Date(2020, 10, 15, 11, 34, 52) when passed in 2020-11-15T16:34:52.000Z', () => {
      expect(parseServerDateTime('2020-11-15T16:34:52.000Z')).toEqual(new Date(2020, 10, 15, 11, 34, 52))
    })
  })
})
