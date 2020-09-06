import { createAction, handleActions } from 'redux-actions'

const OPEN = 'MODAL/OPEN'
const CLOSE = 'MODAL/CLOSE'

export const openAction = createAction(OPEN)
export const closeAction = createAction(CLOSE)

const initialState = {
  show: false,
}

const modalReducer = {
  [OPEN]: function (state, action) {
    return {
      show: true,
      subject: action.payload.subject,
      mode: action.payload.mode,
      startTime: action.payload.startTime,
      endTime: action.payload.endTime,
    }
  },
  [CLOSE]: function (state, action) {
    return { show: false }
  },
}

const ModalModule = handleActions(modalReducer, initialState)

export default ModalModule
