import React from 'react'
import styled from '@emotion/styled'
import { day, year, month, date } from '../utils/time'

const Top = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  width: 100%;
  border-bottom: 1px solid;
  box-sizing: border-box;
`

const DateBox = styled.div`
  align-items: center;
  padding: 5px;
  width: 200px;
  font-size: 24px;
  text-align: center;
  box-sizing: border-box;
  & > b {
    color: ${(props) =>
      props.children[0].props.children === 'SUN' ? 'crimson' : 'inherit'};
    margin-right: 10px;
  }
`

const SaveBtn = styled.button`
  width: 36px;
  height: 100%;
  border: 1px solid black;
`

function Header() {
  return (
    <Top>
      <DateBox>
        <b>{`${day}`}</b>
        <span>
          {`${year}`}/{`${month}/${date}`}
        </span>
      </DateBox>

      <SaveBtn>=</SaveBtn>
    </Top>
  )
}

// style

export default Header
