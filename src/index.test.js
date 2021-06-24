import { parse } from 'date-fns'
import { formatServerDate, formatServerDateTime, formatDisplayDateTime, formatDisplayDate, parseServerDate, parseServerDateTime } from './'

const isFunction = x => typeof x === 'function'

describe('dateUtils', () => {
  describe('formatServerDate', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDate)).toBeTruthy()
    })
    it('throws an Error when passed in a String', () => {
      expect(() => {
        formatServerDate('01/01/01')
      }).toThrow('Input is a string, expected a Date Object')
    })
    it('returns undefined when passed in a non valid Date Object', () => {
      const badDateObject = parse(1, 'MM/dd/yyyy', new Date(0))
      expect(formatServerDate(badDateObject)).toEqual(undefined)
    })
    it('returns 2020-11-15 when passed in new Date(2020, 10, 15)', () => {
      expect(formatServerDate(new Date(2020, 10, 15))).toEqual('2020-11-15')
    })
  })

  describe('formatServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatServerDateTime)).toBeTruthy()
    })
    it('throws an Error when passed in an a String', () => {
      expect(() => {
        formatServerDateTime('01/01/01')
      }).toThrow('Input is a string, expected a Date Object')
    })
    it('returns undefined when passed in a non valid Date Object', () => {
      const badDateObject = parse(1, 'MM/dd/yyyy', new Date(0))
      expect(formatServerDateTime(badDateObject)).toEqual(undefined)
    })
    it('returns 11/15/2020 11:23 AM when passed new Date(2020, 10, 15, 6, 23)', () => {
      expect(formatServerDateTime(new Date(2020, 10, 15, 6, 23))).toEqual('2020-11-15T11:23:00.000Z')
    })
  })

  describe('formatDisplayDateTime', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDateTime)).toBeTruthy()
    })
    it('throws an Error when passed in a String', () => {
      expect(() => {
        formatDisplayDateTime('01/01/01')
      }).toThrow('Input is a string, expected a Date Object')
    })
    it('returns empty String when passed in a non valid Date Object', () => {
      const badDateObject = parse(1, 'MM/dd/yyyy', new Date(0))
      expect(formatDisplayDateTime(badDateObject)).toEqual('')
    })
    it('returns 11/15/2020 6:23 AM when passed new Date(2020, 10, 15, 6, 23)', () => {
      expect(formatDisplayDateTime(new Date(2020, 10, 15, 6, 23))).toEqual('11/15/2020 6:23 AM')
    })
  })

  describe('formatDisplayDate', () => {
    it('is a function', () => {
      expect(isFunction(formatDisplayDate)).toBeTruthy()
    })
    it('throws an Error when passed in a String', () => {
      expect(() => {
        formatDisplayDate('01/01/01')
      }).toThrow('Input is a string, expected a Date Object')
    })
    it('returns empty String when passed in a non valid Date Object', () => {
      const badDateObject = parse(1, 'MM/dd/yyyy', new Date(0))
      expect(formatDisplayDate(badDateObject)).toEqual('')
    })
    it('returns 11/15/2020 when passed new Date(2020, 10, 15)', () => {
      expect(formatDisplayDate(new Date(2020, 10, 15))).toEqual('11/15/2020')
    })
  })

  describe('parseServerDate', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDate)).toBeTruthy()
    })
    it('returns undefined when passed in bad input', () => {
      expect(parseServerDate(undefined)).toEqual(undefined)
      expect(parseServerDate('1')).toEqual(undefined)
    })
    it('throws an Error when input in not a String', () => {
      expect(() => {
        parseServerDate({})
      }).toThrow('Input is not a string')
    })
    it('returns new Date(2020, 10, 15) when passed in 2020-11-15', () => {
      expect(parseServerDate('2020-11-15')).toEqual(new Date(2020, 10, 15))
    })
    it('ignores timezone', () => {
      expect(parseServerDate('2020-11-15:New_York')).toEqual(new Date(2020, 10, 15))
    })
  })

  describe('parseServerDateTime', () => {
    it('is a function', () => {
      expect(isFunction(parseServerDateTime)).toBeTruthy()
    })
    it('returns undefined when passed in bad input', () => {
      expect(parseServerDateTime(undefined)).toEqual(undefined)
      expect(parseServerDateTime('1')).toEqual(undefined)
    })
    it('throws an Error when input in not a String', () => {
      expect(() => {
        parseServerDateTime({})
      }).toThrow('Input is not a string')
    })
    it('returns new Date(2020, 10, 15, 11, 34, 52) when passed in 2020-11-15T16:34:52.000Z', () => {
      expect(parseServerDateTime('2020-11-15T16:34:52.000Z')).toEqual(new Date(2020, 10, 15, 11, 34, 52))
    })
  })
})
