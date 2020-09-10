import React from 'react'
import css from '@emotion/css'
import { useDispatch } from 'react-redux'
import { openAction } from '../../redux/modules/ModalRedux'
import { createTimeForm } from '../utils/time'

let clickTarget = []

const Line = (props) => {
  const dispatch = useDispatch()

  const handleMouseDown = (e) => {
    clickTarget = []
    const time = Number(e.target.dataset.num)

    clickTarget[0] = time
  }

  const handleMouseUp = (e) => {
    const time = Number(e.target.dataset.num)
    clickTarget[1] = time + 0.5

    dispatch(
      openAction({
        subject: props.subject,
        mode: ' 생성',
        // startTime: createTimeForm(clickTarget[0]),
        endTime: createTimeForm(clickTarget[1]),
      }),
    )
  }

  return (
    <div
      css={css`
        width: 100%;
        min-height: 15px;
        &:hover {
          background: black;
        }
        cursor: pointer;
        &.selected {
          background: black;
        }
      `}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      data-num={props.num / 2}
    />
  )
}

export default Line
