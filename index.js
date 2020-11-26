export function toString (value) {
    if (!value) { return '' }
    const dd = value.getDate()
    const mm = value.getMonth() + 1
    const yyyy = value.getFullYear()
    return dd + '/' + mm + '/' + yyyy
  }
  export function fromYMD (value, separator, translateMonth) {
    if (!value) { return '' }
    if (!separator) separator = '/'
  
    // const tmp = new Date(Date.parse(value))
  
    // const dd = tmp.getDate()
    // const mm = translateMonth ? getMonthName(parseInt(tmp.getMonth())) : parseInt(tmp.getMonth())
    // const yyyy = tmp.getFullYear()
  
    const tmp = value.split('-')
    const yyyy = tmp[0]
    const mm = translateMonth ? getMonthName(parseInt(tmp[1] - 1)) : parseInt(tmp[1] - 1)
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
    if (!separator) separator = '/'
  
    const tmp = value.split('-')
    const yyyy = tmp[0]
    const mm = translateMonth ? getMonthName(parseInt(tmp[1] - 1)) : parseInt(tmp[1] - 1)
    const day = tmp[2].split(' ')
    const dd = day[0]
  
    const time = day[1].split(':')
    const hh = time[0]
    const ii = time[1]
    
    return dd + separator + mm + separator + yyyy + ', pukul ' + hh + ':'+ ii   
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
    
    const calculateAge = function(birthday){
      // birthday as a string
      var parts =birthday.split('-')
      var c_birthday = new Date(parts[0], parts[1] - 1, parts[2]) 
      var ageDifMs = Date.now() - c_birthday.getTime()
      var ageDate = new Date(ageDifMs) // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970)
    }
    const age = calculateAge(value)
    return age
  }
  
  export function getDateBetween (start, end) {
    Date.prototype.addDays = function(days) {
      var dat = new Date(this.valueOf())
      dat.setDate(dat.getDate() + days)
      return dat
    }
  
    function getDates(startDate, stopDate) {
      var dateArray = new Array()
      var currentDate = startDate
      while (currentDate <= stopDate) {
        // console.log(currentDate)
        dateArray.push(toString(currentDate))
        currentDate = currentDate.addDays(1)
      }
      return dateArray
    }
  
    return getDates(start, end)
  }