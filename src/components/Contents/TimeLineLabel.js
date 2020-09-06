import React from 'react'
import styled from '@emotion/styled'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 8px;
  width: 55px;
  border-right: 1px solid;
  border-left: 1px solid;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 50%, transparent 50%);
  background-size: 1px 60px;
`
const LabelWrap = styled.div`
  position: absolute;
  top: -11px;
  width: 100%;
  height: ${24.5 * 30}px;
`
const TimeLabel = styled.div`
  width: 100%;
  height: 30px;
  min-height: 30px;
`

const TimeLineLabel = (props) => {
  const decideTimeLabel = (el) => {
    const mark = el + props.LINE_START_TIME
    const pmMark = mark % 12
    let meridiem = ''
    if (mark === 12) {
      meridiem = 'PM'
      return `${meridiem} ${mark}`
    } else if (pmMark === 0) {
      meridiem = 'AM'
      return `${meridiem} ${pmMark}`
    } else {
      return pmMark
    }
  }
  return (
    <Wrap border>
      <LabelWrap>
        {Array.from({ length: 25 }, (v, i) => i).map((el) => (
          <TimeLabel key={'timeLabel' + el + props.LINE_START_TIME}>
            {decideTimeLabel(el)}
          </TimeLabel>
        ))}
      </LabelWrap>
    </Wrap>
  )
}

export default TimeLineLabel
