import React from 'react'
import styled from '@emotion/styled'

import TimelineBackground from './TimelineBackground'
import TimeLineLabel from './TimeLineLabel'
import NowHandLine from './NowHandLine'
import { timeDataList_plan } from '../Category/data'

function Contents() {
  const LINE_START_TIME = 0

  return (
    <Wrap>
      <THead>
        <HalfWrap>
          <b>계획</b>
        </HalfWrap>
        <SmallWrap />
        <HalfWrap head>
          <b>기록</b>
        </HalfWrap>
      </THead>
      <TBody>
        <TimelineBackground
          timeData={timeDataList_plan}
          subject="plan"
          LINE_START_TIME={LINE_START_TIME}
        />
        <TimeLineLabel LINE_START_TIME={LINE_START_TIME} />
        <TimelineBackground
          timeData={[]}
          opacity={1}
          subject="write"
          LINE_START_TIME={LINE_START_TIME}
        />
        <NowHandLine LINE_START_TIME={LINE_START_TIME} />
      </TBody>
    </Wrap>
  )
}

// style

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
  width: 100%;
  min-height: 330px;
  text-align: center;
  border-radius: 10px;
  box-sizing: border-box;
  background: #fff;
  @media (max-height: 700px) {
    height: 330px;
  }
`

const THead = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid;
`

const TBody = styled.div`
  display: flex;
  position: relative;
  width: 100%;
`

const HalfWrap = styled.div`
  position: relative;
  width: 48%;
  overflow: hidden;
`

const SmallWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 55px;
`

export default Contents
