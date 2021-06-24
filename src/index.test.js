import { formatServerDate, formatServerDateTime, formatDisplayDateTime, formatDisplayDate, parseServerDate, parseServerDateTime } from './'

const isFunction = x => typeof x === 'function'

const trunc = date =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)

describe('dateUtils', () => {
  describe('formatDisplayDate', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDate)).toBeTruthy()
    })
    it('returns 11/15/2020 when passed new Date(2020, 10, 15)', () => {
      expect(formatDisplayDate(new Date(2020, 10, 15))).toEqual('11/15/2020')
    })
    it('can format Date display format', () => {
      expect(formatDisplayDate(new Date(0))).toBe('01/01/1970')
      expect(formatDisplayDate(new Date(1001))).toBe('01/01/1970')
      expect(formatDisplayDate(new Date(1605416400000))).toBe('11/15/2020')
    })
  })

  describe('formatServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDateTime)).toBeTruthy()
    })
    it('can format DateTime server format', () => {
      expect(formatServerDateTime(new Date(0))).toBe('1970-01-01T00:00:00.000Z')
      expect(formatServerDateTime(new Date(1001))).toEqual('1970-01-01T00:00:01.001Z')
      expect(formatServerDateTime(new Date(1605416400000))).toEqual('2020-11-15T05:00:00.000Z')
    })
  })

  describe('formatDisplayDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDateTime)).toBeTruthy()
    })
    it('returns 11/15/2020 6:23 AM when passed new Date(2020, 10, 15, 6, 23)', () => {
      expect(formatDisplayDateTime(new Date(0))).toBe('01/01/1970 12:00 AM')
      expect(formatDisplayDateTime(new Date(1001))).toEqual('01/01/1970 12:00 AM')
      expect(formatDisplayDateTime(new Date(1605416400000))).toEqual('11/15/2020 5:00 AM')
    })
  })

  describe('formatServerDate', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDate)).toBeTruthy()
    })
    it('returns 2020-11-15 when passed in new Date(2020, 10, 15)', () => {
      expect(formatServerDate(new Date(2020, 10, 15))).toEqual('2020-11-15')
    })
    it('can format Date server format', () => {
      expect(formatServerDate(new Date(0))).toBe('1970-01-01')
      expect(formatServerDate(new Date(1001))).toBe('1970-01-01')
      expect(formatServerDate(new Date(2020, 10, 15))).toBe('2020-11-15')
    })
  })

  describe('parseServerDate', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDate)).toBeTruthy()
    })
    it('returns new Date(2020, 10, 15, 5) when passed in 2020-11-15', () => {
      expect(parseServerDate('2020-11-15')).toEqual(trunc(new Date(2020, 10, 15, 5)))
    })
    it('ignores timezone', () => {
      expect(parseServerDate('2020-11-15:New_York')).toEqual(trunc(new Date(2020, 10, 15, 5)))
    })
    it('can parse Date server format', () => {
      expect(formatServerDate(parseServerDate('2020-10-15'))).toEqual('2020-10-15')
  
      expect(parseServerDate('2020-10-15')).toEqual(trunc(new Date(2020, 9, 15)))
      expect(parseServerDate('1970-01-01')).toEqual(trunc(new Date(1970, 0, 1)))
      expect(parseServerDate('2020-11-15')).toEqual(trunc(new Date(2020, 10, 15)))
      expect(parseServerDate('2020-10-15')).toEqual(trunc(new Date(2020, 9, 15)))
    })
    it('ignores bad input', () => {
      expect(parseServerDate(undefined)).toEqual(undefined)
      expect(parseServerDate('24')).toEqual(undefined)
    })
  })

  describe('parseServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDateTime)).toBeTruthy()
    })
    it('can parse DateTime server format', () => {
      expect(parseServerDateTime('1970-01-01T00:00:00.000Z')).toEqual(new Date(0))
      expect(parseServerDateTime('1970-01-01T00:00:01.001Z')).toEqual(new Date(1001))
      expect(parseServerDateTime('2020-11-15T05:00:00.000Z')).toEqual(new Date(1605416400000))
    })
    it('ignores bad input', () => {
      expect(parseServerDate(undefined)).toEqual(undefined)
      expect(parseServerDate('24')).toEqual(undefined)
    })
  })
})
