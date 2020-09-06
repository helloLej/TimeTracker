import React, { useState } from 'react'
import styled from '@emotion/styled'
import ListItem from './ListItem'

const Wrap = styled.div`
  margin-top: 15px;
  width: 100%;
  min-width: 300px;
  border-radius: 10px;
  box-sizing: border-box;
`
const H1 = styled.h1`
  margin: 0;
  padding-left: 15px;
  font-size: 1em;
`
const Ol = styled.ol`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 200px;
`

export default function TodoList() {
  const defaultTodos = [
    { order: 1, cont: '카테고리 만들기', done: false, must: true },
    {
      order: 2,
      cont: '팝업 - 리덕스(클릭한 데이터 넘기기)',
      done: true,
      must: false,
    },
    { order: 3, cont: 'test3', done: false, must: false },
  ]

  const [todoList, setTodoList] = useState([...defaultTodos])

  const setTodoItem = (order, data) => {
    const updatedList = [...todoList]
    updatedList[order - 1].cont = data
    setTodoList(updatedList)
  }

  return (
    <Wrap>
      <H1>TO DO LIST</H1>
      <Ol>
        {todoList.map((el) => (
          <ListItem key={el.order} el={el} setTodoItem={setTodoItem} />
        ))}
      </Ol>
    </Wrap>
  )
}
