import {
  format as baseFormat,
  formatDistanceToNow as baseFormatDistanceToNow,
  parse as baseParse, parseISO,
} from 'date-fns'
import { fr as locale } from 'date-fns/locale'
import { curry } from 'ramda'

export const format = curry((formatTemplate: string, date: Date) => (
  baseFormat(date, formatTemplate, { locale })
))

export const parse = curry((parseTemplate: string, date: string) => (
  baseParse(date, parseTemplate, new Date())
))

export const formatDistanceToNow = (date: Date) => (
  baseFormatDistanceToNow(date, { locale })
)

export const getHoursFromDate = format('HH:mm')

export const parseApi = parseISO

export const formatLong = format('PPPP')
export const formatDateISO = format('yyyy-MM-dd')
export const formatDateFr = format('dd/MM/yyyy')
export const formatDateLong = format('dd MMMM yyyy')

export const formatDateWithHours = format('dd MMM yyyy à HH:mm')
