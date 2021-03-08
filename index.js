export function toString (value, ymd, his) {
  if (!value) { return '' }
  const dd = value.getDate()
  const mm = value.getMonth() + 1
  const yyyy = value.getFullYear()
  if (ymd) {
    if (his) {
      const hh = value.getHours()
      const ii = value.getMinutes()
      const ss = value.getSeconds()

      return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + ii + ':' + ss
    } else {
      return yyyy + '-' + mm + '-' + dd
    }
  }

  if (his) {
    const hh = value.getHours()
    const ii = value.getMinutes()
    const ss = value.getSeconds()

    return yyyy + '-' + mm + '-' + dd + ' ' + hh + ':' + ii + ':' + ss
  }
  return dd + '/' + mm + '/' + yyyy
}
export function fromYMD (value, separator, translateMonth) {
  if (!value) { return '' }
  if (!separator) { separator = '/' }

  // const tmp = new Date(Date.parse(value))

  // const dd = tmp.getDate()
  // const mm = translateMonth ? getMonthName(parseInt(tmp.getMonth())) : parseInt(tmp.getMonth())
  // const yyyy = tmp.getFullYear()

  const tmp = value.split('-')
  const yyyy = tmp[0]
  // const mm = translateMonth ? getMonthName(parseInt(tmp[1] - 1)) : parseInt(tmp[1] - 1)
  const mm = translateMonth ? getMonthName(parseInt(tmp[1] - 1)) : parseInt(tmp[1])
  const dd = tmp[2]
  // const mm = translateMonth ? getMonthName(parseInt(tmp.getMonth())) : parseInt(tmp.getMonth())
  // const yyyy = tmp.getFullYear()

  return dd + separator + mm + separator + yyyy
  // tmp.getHours().toString().padStart(2, '0') + ':' +
  // tmp.getMinutes().toString().padStart(2, '0') + ':' +
  // tmp.getSeconds().toString().padStart(2, '0')
}

export function fromYMDHis (value, separator, translateMonth) {
  if (!value) { return '' }
  if (!separator) { separator = '/' }

  const tmp = value.split('-')
  const yyyy = tmp[0]
  const mm = translateMonth ? getMonthName(parseInt(tmp[1] - 1)) : tmp[1]
  const day = tmp[2].split(' ')
  const dd = day[0]

  const time = day[1].split(':')
  const hh = time[0]
  const ii = time[1]

  return dd + separator + mm + separator + yyyy + ', pukul ' + hh + ':' + ii
}
export function getMonthName (value) {
  if (!value && value !== 0) { return '' }
  const definition = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
  ]
  return definition[value]
}

export function getAge (value) {
  // input must be y-m-d

  const calculateAge = function (birthday) {
    // birthday as a string
    const parts = birthday.split('-')
    const cBirthday = new Date(parts[0], parts[1] - 1, parts[2])
    const ageDifMs = Date.now() - cBirthday.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  const age = calculateAge(value)
  return age
}

export function getDateBetween (start, end) {
  // eslint-disable-next-line no-extend-native
  Date.prototype.addDays = function (days) {
    const dat = new Date(this.valueOf())
    dat.setDate(dat.getDate() + days)
    return dat
  }

  function getDates (startDate, stopDate) {
    // eslint-disable-next-line no-array-constructor
    const dateArray = new Array()
    let currentDate = startDate
    while (currentDate <= stopDate) {
      // console.log(currentDate)
      dateArray.push(toString(currentDate))
      currentDate = currentDate.addDays(1)
    }
    return dateArray
  }

  return getDates(start, end)
}
