export const colorList = {
  red: '#fe4141',
  // f22
  orange: '#ff6d41',
  yellow: '#ffc33b',
  green: '#009898',
  blue: '#05589d',
  purple: '#8b22ff',
  hotpink: 'hotpink',
  pink: 'pink',
  gray: '#666',
}

export const categoryList = [
  { id: 1, label: '공부', color: 'red' },
  { id: 2, label: '자기계발', color: 'orange' },
  { id: 3, label: '일상생활/위생', color: 'yellow' },
  { id: 4, label: '운동', color: 'green' },
  { id: 5, label: '업무', color: 'blue' },
  { id: 6, label: '기타/필수', color: 'purple' },
  { id: 7, label: '기타/선택', color: 'pink' },
  { id: 8, label: '휴식', color: 'hotpink' },
  { id: 9, label: '취침', color: 'gray' },
]

export const timeDataList_plan = [
  { time: { hour: 0, min: 0 } },
  {
    time: { hour: 8, min: 0 },
    category: 'gray',
    memo: '기상',
  },
  {
    time: { hour: 11, min: 30 },
    category: 'red',
    memo: ' 개발 공부',
  },
  {
    time: { hour: 12, min: 30 },
    category: 'yellow',
    memo: '식사, 나갈준비',
  },
  {
    time: { hour: 13, min: 30 },
    category: 'yellow',
    memo: '이동 : 강남 도착',
  },
  {
    time: { hour: 18, min: 30 },
    category: 'blue',
  },
  {
    time: { hour: 19, min: 30 },
    category: 'yellow',
    memo: '식사',
  },
]

export const timeDataList_log = [
  { time: { hour: 0, min: 0 } },
  {
    time: { hour: 7, min: 40 },
    category: 'gray',
    memo: '기상',
  },
  {
    time: { hour: 11, min: 40 },
    category: 'red',
    memo: ' 개발 공부',
  },
  {
    time: { hour: 12, min: 30 },
    category: 'yellow',
  },
]
