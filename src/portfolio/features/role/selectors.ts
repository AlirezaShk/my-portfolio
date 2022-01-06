import { RootState } from '../../../app/store'

export const selectTitle = (state: RootState) => [
    state.roleTitle.status,
    state.roleTitle.position,
    state.roleTitle.value
]
