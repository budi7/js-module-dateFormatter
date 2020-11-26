## js-module-dateFormatter

helps you handle date

version 1.0.0

--------



### toString(value)
convert date object to readable date.

params
```
param: value
desc: date object
type: date
required: true
format: _
example: new Date()
```


docs
```
import {toString} from 'js-module-dateFormatter'

return toString(new Date())
```



### fromYMD(value, separator, translateMonth)
convert date from YMD format string.

YMD separator: "-"


params
```
param: value
desc: YMD string 
type: string
required: true
format: YYYY-MM-DD
example: "1992-12-12"
```
```
param: separator
desc: output separator 
type: string
required: false
format: _
example: "/"
```
```
param: translateMonth
desc: translate month to month name
type: boolean
required: false
format: _
example: true
```

docs
```
import {fromYMD} from 'js-module-dateFormatter'

fromYMD("1992-12-12", "/", true) // output: 12/Desember/1992
fromYMD("1992-12-12", " ", false) // output: 12 12 1992
```


### fromYMDHis(value, separator, translateMonth)
convert date from YMDHIS format string.

YMD separator: "-"

HIS separator: ":"


params
```
param: value
desc: YMDHIS string 
type: string
required: true
format: YYYY-MM-DD HH:ii:ss
example: "1992-12-12 20:00:12"
```
```
param: separator
desc: output separator 
type: string
required: false
format: _
example: "/"
```
```
param: translateMonth
desc: translate month to month name
type: boolean
required: false
format: _
example: true
```

docs
```
import {fromYMDHis} from 'js-module-dateFormatter'

fromYMDHis("1992-12-12 12:00:00", "/", true) // output: 12/Desember/1992  12:00:00
fromYMDHis("1992-12-12 12:00:00", " ", false) // output: 12 12 1992 12:00:00
```


### getMonthName(value)
convert number of month to name of month


params
```
param: value
desc: number of month
type: number
required: true
format: _
example: 2
```

docs
```
import {getMonthName} from 'js-module-dateFormatter'

getMonthName(5) // output: Mei
```

### getAge(value)
get someone's age


params
```
param: value
desc: date string
type: number
required: true
format: YYYY-MM-DD
example: 1992-12-2
```

docs
```
import {getAge} from 'js-module-dateFormatter'

getAge(1992-12-2) // output: 27
```


### getDateBetween(start, end)
get list of date between

params
```
param: start
desc: date object start
type: date
required: true
format: _
example: new Date()
```
```
param: end
desc: date object end
type: date
required: true
format: _
example: new Date()
```

docs
```
import {getDateBetween} from 'js-module-dateFormatter'

getDateBetween(new Date(), new Date()) // output: 0
```