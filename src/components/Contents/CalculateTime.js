import { useState, useEffect } from 'react'

export default function CalculateTime() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setTimeout(() => {
      setTime(new Date())
    }, 60000)
  }, [time])

  return [time, setTime]
}
