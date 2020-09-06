export const addZero = (n) => (n < 10 ? '0' + n : n)

export const now = new Date()
export const year = now.getFullYear()
export const month =
  now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
export const date = addZero(now.getDate())
export const hour = (now) => addZero(now.getHours())
export const min = (now) => addZero(now.getMinutes())

export let day = now.getDay()

switch (day) {
  case 0:
    day = '일'
    break
  case 1:
    day = '월'
    break
  case 2:
    day = '화'
    break
  case 3:
    day = '수'
    break
  case 4:
    day = '목'
    break
  case 5:
    day = '금'
    break
  case 6:
    day = '토'
    break
  default:
    break
}

export const nowTime = { hour: hour(now), min: min(now) }

export const percentageOfTime = (time) =>
  ((time.hour * 60 + Number(time.min)) / (24 * 60)) * 100
export const degreeOfTime = (time) => (percentageOfTime(time) * 360) / 100

export const createTimeForm = (num) => {
  const time = { hour: Math.floor(num), min: (num % 1) * 60 }
  console.log({ time })
  return addZero(Math.floor(num) % 24) + ':' + addZero((num % 1) * 60)
}
