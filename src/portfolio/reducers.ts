import { createReducer } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../app/store'
import * as actions from './actions'
import { StageState } from './constants'

export const initialState: StageState = {
    stage: 0,
    status: 'idle',
    delay: 0
}

export default createReducer(initialState, builder => {
    builder
        .addCase(actions.changeStage, (state, action) => {
            state.stage = action.payload.stage
        })
        .addCase(actions.changeStatus, (state, action) => {
            state.status = action.payload.status
            state.delay = action.payload.delay
        })
})
