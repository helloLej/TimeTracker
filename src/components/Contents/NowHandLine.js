import React from 'react'
import css from '@emotion/css'
import { hour, min } from '../utils/time'
import CalculateTime from './CalculateTime'

const NowHandLine = (props) => {
  const [time] = CalculateTime()

  const current = { hour: hour(time), min: min(time) }

  let height =
    (Number(current.hour) - props.LINE_START_TIME + Number(current.min) / 60) *
    30

  if (height < 0) height = height + 30 * 24

  return (
    <div
      css={css`
        position: absolute;
        margin-top: 8px;
        top: ${height}px;
        width: 100%;
        height: 1px;
        background: red;
      `}
    >
      {/* {current.hour + ' : ' + current.min} */}
    </div>
  )
}

export default NowHandLine
