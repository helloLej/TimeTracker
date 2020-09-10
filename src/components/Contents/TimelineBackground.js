import React from 'react'
import styled from '@emotion/styled'
import css from '@emotion/css'
import TimeBlock from './TimeBlock'
import Line from './Line'

const Wrap = styled.div`
  display: flex;
  width: 48%;
`
const BodyInner = styled.div`
  display: flex;
  margin-top: 8px;
  width: 100%;
  height: ${24 * 30}px;
  background-color: #fff;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1) 50%, transparent 50%);
  background-size: 1px 60px;
`

const HalfWrap = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`

const TimelineBackground = (props) => {
  return (
    <Wrap>
      <BodyInner>
        <HalfWrap>
          {Array.from({ length: 48 }, (v, i) => i).map((el) => (
            <Line
              key={props.keyName + 'line' + el}
              num={(el + props.LINE_START_TIME * 2) % 48}
              subject={props.subject}
            />
          ))}
          <div
            css={css`
              position: absolute;
              top: 0;
              width: 100%;
            `}
          >
            {props.timeData.map(
              (el, i, all) =>
                i > 0 && (
                  <TimeBlock
                    key={el.time.hour * 60 + el.time.min}
                    el={el}
                    i={i}
                    all={all}
                    num={
                      (el.time.hour * 2 +
                        el.time.min / 30 +
                        props.LINE_START_TIME * 2) %
                      48
                    }
                    subject={props.subject}
                    opacity={props.opacity}
                  />
                ),
            )}
          </div>
        </HalfWrap>
      </BodyInner>
    </Wrap>
  )
}

export default TimelineBackground
