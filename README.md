# Service Date
A library to convert back and forth from the ADD server date format to the standard display format.

# Available Functions

## formatServerDate
Converts a Date object into a String formatted as `yyyy-MM-dd`

```
import { formatServerDate } from '@autodatadirect/service-date'

const date = formatServerDate(new Date(2021, 5, 15))
console.log(date) // '2021-06-15'
```

## formatServerDateTime
Converts a Date object into a String formatted as `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'`

```
import { formatServerDateTime } from '@autodatadirect/service-date'

const date = formatServerDateTime(new Date(2021, 5, 15, 9, 59, 32, 139))
console.log(date) // '2021-06-15T09:59:32.139Z'
```

## formatDisplayDateTime
Converts a Date object into a String formatted as `M/d/yyyy h:mm a`

```
import { formatDisplayDateTime } from '@autodatadirect/service-date'

const date = formatDisplayDateTime(new Date(2021, 5, 15, 9, 59, 32, 139))
console.log(date) // '6/15/2021 9:59 AM'
```

## formatDisplayDate
Converts a Date object into a String formatted as `M/d/yyyy h:mm a`

```
import { formatDisplayDate } from '@autodatadirect/service-date'

const date = formatDisplayDate(new Date(2021, 5, 15, 9, 59, 32, 139))
console.log(date) // '6/15/2021'
```

## parseServerDate
Converts a String formatted as `yyyy-MM-dd` into a Date object

```
import { parseServerDate } from '@autodatadirect/service-date'

const date = parseServerDate('2021-06-15')
console.log(date) // new Date(2021, 5, 15, 9, 59, 32, 139)
```

## parseServerDateTime
Converts a String formatted as `yyyy-MM-dd'T'HH:mm:ss.SSS'Z'` into a Date object

```
import { parseServerDateTime } from '@autodatadirect/service-date'

const date = parseServerDateTime('2021-06-15T09:59:32.139Z')
console.log(date) // new Date(2021, 5, 15, 9, 59, 32, 139)
```
