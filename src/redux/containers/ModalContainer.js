import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { openAction, closeAction } from '../modules/ModalRedux'
import Modal from '../../components/Modal'

const ModalContainer = (props) => {
  const { show, subject, mode, startTime, endTime } = useSelector((state) => {
    return {
      show: state.ModalModule.show,
      subject: state.ModalModule.subject,
      mode: state.ModalModule.mode,
      startTime: state.ModalModule.startTime,
      endTime: state.ModalModule.endTime,
    }
  })
  const dispatch = useDispatch()

  return (
    show && (
      <Modal
        show={show}
        subject={subject}
        mode={mode}
        endTime={endTime}
        onCloseClick={() => dispatch(closeAction())}
        onOpenClick={() => dispatch(openAction())}
        {...props}
      />
    )
  )
}

export default React.memo(ModalContainer)
