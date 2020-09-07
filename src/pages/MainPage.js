import React from 'react'
import css from '@emotion/css'
import styled from '@emotion/styled'

import TodoList from '../components/Todo/TodoList'
import PieChart from '../components/PieChart/PieChart'
import Contents from '../components/Contents/Contents'
import Header from '../components/Header/Header'
import { COLOR_BG } from '../commonStyle'

import ModalContainer from '../redux/containers/ModalContainer'
import {
  timeDataList_plan,
  timeDataList_log,
} from '../components/Category/data'

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  min-width: 300px;
  /* height: 100vh; */
  background: ${COLOR_BG};
  box-sizing: border-box;
  transition: all 0.3s;
  @media (max-width: 400px) {
    padding: 10px;
  }
  @media (max-height: 700px) {
    height: 100%;
  }
`

const PieWrap = styled.div`
  position: relative;
`

const piechart_upper = css`
  position: absolute;
  top: 15px;
  left: 15px;
`

function MainPage() {
  return (
    <Wrap>
      <Header />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
          padding: 15px 15px 0;
          @media (max-width: 570px) {
            flex-direction: column;
            padding: 0;
          }
        `}
      >
        <PieWrap>
          <PieChart
            radius={75}
            timeDataList={timeDataList_plan}
            timeHand={true}
            boxstyle={{
              opacity: 0.6,
            }}
          />
          <PieChart
            radius={60}
            timeDataList={timeDataList_log}
            boxstyle={piechart_upper}
            concurrent
          />
        </PieWrap>
        <TodoList />
      </div>
      <Contents />
      <ModalContainer />
    </Wrap>
  )
}

export default MainPage
