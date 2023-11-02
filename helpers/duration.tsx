export const Duration = (sec: any) => {
  var secNum = parseInt(sec, 10)
  let hours: any = Math.floor(secNum / 3600)
  let minutes: any = Math.floor((secNum - (hours * 3600)) / 60)
  let seconds: any = secNum - (hours * 3600) - (minutes * 60)

  if (hours < 10) { hours = '0' + hours }
  if (minutes < 10) { minutes = '0' + minutes }
  if (seconds < 10) { seconds = '0' + seconds }

  if (minutes === '00') {
    return seconds + 'd'
  } else if (hours === '00') {
    return minutes + 'm' + ' ' + seconds + 'd'
  } else {
    return hours + 'h' + ' ' + minutes + 'm'
  }
}
