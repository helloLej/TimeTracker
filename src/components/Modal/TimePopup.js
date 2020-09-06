import React, { useState } from 'react'
import css from '@emotion/css'
import styled from '@emotion/styled'
import { nowTime } from '../utils/time'
import { categoryList, colorList } from '../Category/data'

const inputs = css`
  display: block;
  margin: 0 auto;
  width: 80%;
  min-width: 180px;
  height: 36px;
  border: 0;
  border-bottom: 2px solid black;
  font-size: 20px;
`
const Input = styled.input`
  ${inputs}
  vertical-align: baseline;
`
const Select = styled.select`
  display: block;
  width: 80%;
  min-width: 180px;
  height: 36px;
`
const Option = styled.option`
  position: relative;
  padding: 2px;
  height: 36px;
  font-size: 17px;
  background-color: ${(props) => colorList[props.bgColor]};
`
const TimePopup = (props) => {
  const time = nowTime.hour + ':' + nowTime.min
  const [startTime, setStartTime] = useState(time)
  const [endTime, setEndTime] = useState(time)

  React.useEffect(() => {
    setEndTime(props.endTime)
  }, [props.endTime])

  const changeStartTime = (e) => {
    const { value } = e.target
    setStartTime(value)
  }

  const changeEndTime = (e) => {
    const { value } = e.target
    setEndTime(value)
  }

  const changeCategory = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <Input type="text" name="title" placeholder="내용" autoComplete="off" />
      <Select onChange={changeCategory}>
        <Option value="">카테고리 선택</Option>
        {categoryList.map((el) => (
          <Option key={el.id} value={el.color} bgColor={el.color}>
            {el.label}
          </Option>
        ))}
      </Select>
      <label
        css={css`
          width: 90%;
        `}
      >
        <span>시작시간</span>
        <Input
          type="time"
          name="startTime"
          onBlur={changeStartTime}
          defaultValue={startTime}
        />
      </label>

      <label
        css={css`
          width: 90%;
        `}
      >
        <span>종료시간</span>
        <Input
          type="time"
          name="endTime"
          onBlur={changeEndTime}
          defaultValue={props.endTime || endTime}
          onChange={changeEndTime}
        />
      </label>
    </>
  )
}

export default TimePopup
