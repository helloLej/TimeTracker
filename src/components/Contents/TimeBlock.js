import React from 'react'
import css from '@emotion/css'
import { categoryList, colorList } from '../Category/data'
const START_TIME = 0

const TimeBlock = ({ el, i, all, subject, opacity = 0.6 }) => {
  const beforeTime = all[i - 1].time
  const endTime = el.time

  const top =
    (Number(beforeTime.hour) + Number(beforeTime.min) / 60 - START_TIME) * 30
  const height =
    (Number(endTime.hour) + Number(endTime.min) / 60 - START_TIME) * 30 - top

  const category = categoryList.filter((o) => o.color === el.category)[0] || ''
  const bgColor = colorList[category.color]
  const timeMark = `${beforeTime.hour}:${
    beforeTime.min === 0 ? '00' : beforeTime.min
  }
  ~ ${endTime.hour}:${endTime.min === 0 ? '00' : endTime.min}`

  const blockLabel = `${
    category.label ? timeMark + '[' + category.label + ']' : ''
  } ${el.memo ? el.memo : ''}`

  const distinguish = (e) => {
    console.log('click')
    e.target.style.border = '5px dashed red'
    e.target.classList.add('focus')
  }

  return (
    <div
      draggable
      css={css`
        position: absolute;
        top: ${top}px;
        width: 100%;
        height: ${height}px;
        text-overflow: ellipsis;
        overflow: hidden;
        box-sizing: border-box;
        &:focus {
          border: 1px solid red;
        }
        &.focus {
          border: 1px dotted red;
        }
      `}
      onFocus={distinguish}
    >
      <div
        css={css`
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background: ${bgColor};
          opacity: 0.7;
          opacity: ${opacity};
          box-sizing: border-box;
        `}
        data-id={'timeplan' + i}
      ></div>
      <span
        css={css`
          display: block;
          position: absolute;
          left: 10px;
        `}
      >
        {blockLabel}
      </span>
    </div>
  )
}

export default TimeBlock
