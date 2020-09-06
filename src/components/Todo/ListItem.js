import React, { useState } from 'react'
import styled from '@emotion/styled'
import * as commonStyle from '../../commonStyle'

// style
const Li = styled.li`
  display: flex;
  margin-top: 10px;
  padding: 1px;
  width: 100%;
  min-width: 200px;
  transition: all 0.3s;
  ${commonStyle.convex}
  &.checked {
    ${commonStyle.concave}
    & > input {
      text-decoration: line-through;
    }
  }
`
const Label = styled.label`
  display: block;
  min-width: 50px;
  text-align: center;
  cursor: pointer;
  & > span {
    margin-left: 10px;
  }
`

const ItemInput = styled.input`
  margin-left: 20px;
  width: 100%;
  border: 0;
  outline: none;
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  &::placeholder {
    color: gray;
  }
`

export default function ListItem({ el, setTodoItem }) {
  const { cont, order, done } = el
  const [checked, setChecked] = useState(done)

  const handleFocus = (e) => {
    e.target.style.backgroundColor = '#ddd'
  }
  const handleChange = ({ target }) => {
    setTodoItem(target.dataset.order, target.value)
  }

  const handleBlur = ({ target }) => {
    target.style.backgroundColor = 'transparent'
    if (!cont) {
      target.closest('li').classList.remove('checked')
      setChecked(false)
    }
  }

  const handleCheck = (e) => {
    e.target.closest('li').classList.toggle('checked')
    setChecked(!checked)
  }

  const classnames = checked && 'checked'

  return (
    <Li className={classnames}>
      <Label>
        <input
          type="checkbox"
          onChange={handleCheck}
          disabled={!cont}
          checked={checked}
        />
        <span>{order}.</span>
      </Label>
      <ItemInput
        name="item"
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        placeholder="click and type"
        defaultValue={cont}
        data-order={order}
      />
    </Li>
  )
}
