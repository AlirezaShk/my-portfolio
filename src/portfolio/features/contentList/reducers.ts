import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk, RootState } from '../../../app/store'
import * as actions from './actions'
import { RoleState, RoleArchive, Position as TargetPosition } from './constants'
import { insertLetter } from './models'
import { selectTitle } from './selectors'

export const initialState: RoleState = {
    value: '',
    status: 'idle',
    index: 0,
    position: ''
}

export default createReducer(initialState, builder => {
    builder
        .addCase(actions.writeOne, (state, action) => {
            let target = RoleArchive[state.index]
            let next = target.slice(action.payload, action.payload + 1)
            state.value += next
            if (state.value !== target) state.status = 'writing'
            else state.status = 'idle'
        })
        .addCase(actions.deleteOne, (state, action) => {
            state.value = state.value.slice(0, -1)
            if (state.value.length === 0) {
                state.index += 1
                state.status = 'idle'
            } else state.status = 'deleting'
        })
        .addCase(actions.writePositionOne, (state, action) => {
            let target = TargetPosition + ' '
            let next = target.slice(action.payload, action.payload + 1)
            state.position += next
            if (state.position !== target) state.status = 'writing'
            else state.status = 'idle'
        })
})
