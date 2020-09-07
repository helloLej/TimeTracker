import React from 'react'
import css from '@emotion/css'
import styled from '@emotion/styled'
import { nowTime, percentageOfTime, degreeOfTime } from '../utils/time'
import { colorList } from '../Category/data'
const colorTimeCircle = (list) => {
  let background = 'conic-gradient('
  if (list.length === 0) {
    background += '#fff 0% 100%)'
  } else {
    for (let i = 0; i < list.length - 1; i++) {
      const timeData = list[i]
      const percentageOftimeData = percentageOfTime(timeData.time)
      const nextTimeData = list[i + 1]
      const percentageOftnextTimeData = percentageOfTime(nextTimeData.time)
      const nextTimeBg = colorList[nextTimeData.category] || '#fff'

      background += `${nextTimeBg} ${percentageOftimeData}% ${percentageOftnextTimeData}%, `

      if (i === list.length - 2) {
        background += `#fff ${percentageOftnextTimeData}% 100%)`
      }
    }
  }

  return background
}

const TimeBackground = ({ radius, timeHand, hours, rotate }) => {
  return (
    <div
      css={css`
        position: absolute;
        display: flex;
        justify-content: space-between;
        top: calc(50% - 10px);
        left: -30px;
        width: ${2 * radius + 50}px;
        opacity: ${!timeHand && 0};
        transform: rotate(${rotate}deg);
      `}
    >
      <span
        css={css`
          transform: rotate(${-rotate}deg);
        `}
      >
        {hours[0]}
      </span>
      <span
        css={css`
          transform: rotate(${-rotate}deg);
        `}
      >
        {hours[1]}
      </span>
    </div>
  )
}

function PieChart({ radius = 300, timeDataList, boxstyle, timeHand }) {
  const Pie = styled.div`
    position: relative;
    display: inline-block;
    width: ${2 * radius}px;
    height: ${2 * radius}px;
    background: ${colorTimeCircle(timeDataList)};
    border-radius: 50%;
  `

  const Now = styled.div`
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50%;
    width: 2px;
    height: ${radius}px;
    background: red;
    transform: rotate(${(props) => degreeOfTime(props.now) + 'deg'});
    transform-origin: bottom left;
  `

  return (
    <div
      css={css`
        position: relative;
        margin: 30px;
        width: ${2 * radius}px;
        ${boxstyle}
      `}
    >
      <Pie>
        <Now now={nowTime}></Now>
      </Pie>
      <TimeBackground
        radius={radius}
        timeHand={timeHand}
        hours={[18, 6]}
        rotate={0}
      />
      <TimeBackground
        radius={radius}
        timeHand={timeHand}
        hours={[21, 9]}
        rotate={45}
      />
      <TimeBackground
        radius={radius}
        timeHand={timeHand}
        hours={[15, 3]}
        rotate={-45}
      />
      <TimeBackground
        radius={radius}
        timeHand={timeHand}
        hours={[24, 12]}
        rotate={90}
      />
    </div>
  )
}

export default PieChart
