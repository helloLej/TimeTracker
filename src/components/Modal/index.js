import React from 'react'
import css from '@emotion/css'
import styled from '@emotion/styled'
import TimePopup from './TimePopup'

const Background = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
`
const CenterBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  max-width: 400px;
  min-width: 200px;
  width: 80%;
  height: 400px;
  background-color: #fff;
`
const TitleHead = styled.div`
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: ${(props) => props.bg || 'lightslategray'};
`
const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: calc(100% - 50px);
  box-sizing: border-box;
`

function Modal(props) {
  const hidden = (e) => {
    e.stopPropagation()
    e.preventDefault()
    props.onCloseClick()
  }

  const cancel = (e) => {
    props.onCloseClick()
  }

  let subject = props.subject
  switch (subject) {
    case 'plan':
      subject = '계획'
      break
    case 'write':
      subject = '기록'
      break
    default:
      subject = ''
  }
  const title = subject + ' ' + (props.mode || '')

  return (
    props.show && (
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-width: 300px;
          height: 100vh;
          position: fixed;
          left: 0;
          top: 0;
          @media (max-width: 300px) {
            position: absolute;
          }
        `}
      >
        <Background onClickCapture={hidden} showUp={props.show} />
        <CenterBox showUp={props.show}>
          <TitleHead>{title}</TitleHead>
          <ContentWrap>
            <TimePopup endTime={props.endTime} />
            <div>
              <button>save</button>
              <button onClick={cancel}>cancel</button>
            </div>
          </ContentWrap>
        </CenterBox>
      </div>
    )
  )
}

export default React.memo(Modal)
