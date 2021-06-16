import { format, parse, isValid } from 'date-fns'

export const FORMAT_SERVER_DATETIME = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'"
export const FORMAT_SERVER_DATE = 'yyyy-MM-dd'

export const FORMAT_DISPLAY_DATE = 'M/d/yyyy'
export const FORMAT_DISPLAY_DATETIME = 'M/d/yyyy h:mm a'

const getUTCDate = date => {
  return new Date(
    date.getUTCFullYear(),
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds(),
    date.getMilliseconds()
  )
}

const getLocalDate = date => {
  return new Date(Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  ))
}

export const formatServerDate = dateObj => {
  if (typeof dateObj === 'string') throw new Error('Input is a string, expected a Date Object')
  return isValid(dateObj) ? format(dateObj, FORMAT_SERVER_DATE) : ''
}

export const formatServerDateTime = dateObj => {
  if (typeof dateObj === 'string') throw new Error('Input is a string, expected a Date Object')
  return isValid(dateObj) ? format(dateObj, FORMAT_SERVER_DATETIME) : ''
}

export const formatDisplayDateTime = dateObj => {
  if (typeof dateObj === 'string') throw new Error('Input is a string, expected a Date Object')
  return isValid(dateObj) ? format(dateObj, FORMAT_DISPLAY_DATETIME) : ''
}

export const formatDisplayDate = dateObj => {
  if (typeof dateObj === 'string') throw new Error('Input is a string, expected a Date Object')
  return isValid(dateObj) ? format(dateObj, FORMAT_DISPLAY_DATE) : ''
}

export const parseServerDate = dateString => {
  if (!dateString) return
  if (typeof dateString !== 'string') throw new Error('Input is not a string')
  dateString = dateString.split(':')[0]
  return getUTCDate(parse(dateString, FORMAT_SERVER_DATE, new Date(0)))
}

export const parseServerDateTime = dateString => {
  if (!dateString) return
  if (typeof dateString !== 'string') throw new Error('Input is not a string')
  return getLocalDate(parse(dateString, FORMAT_SERVER_DATETIME, new Date(0)))
}

export const convertServerDateTime = serverDate => formatDisplayDateTime(parseServerDateTime(serverDate))
