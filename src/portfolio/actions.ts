import { createAction } from '@reduxjs/toolkit'
import { CHANGE_STAGE, CHANGE_STATUS } from './actionTypes'
import { ChangeStagePayload, ChangeStatusPayload } from './constants'

export const changeStatus = createAction<ChangeStatusPayload>(CHANGE_STATUS)
export const changeStage = createAction<ChangeStagePayload>(CHANGE_STAGE)
