import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from '../portfolio/features/counter/counterSlice'
import roleReducer from '../portfolio/features/role/reducers'
import portfolioReducer from '../portfolio/reducers'
import { RoleState } from '../portfolio/features/role/constants'
import { StageState } from '../portfolio/constants'
import { initialState as roleInitial } from '../portfolio/features/role/reducers'
import { initialState as portfolioInitial } from '../portfolio/reducers'

const preRoleState: RoleState = {
    ...roleInitial
}
const preStageState: StageState = {
    ...portfolioInitial,
    stage: 1
}
const preloadedState = {
    role: preRoleState,
    portfolio: preStageState
}

export const store = configureStore({
    reducer: {
        roleTitle: roleReducer,
        portfolio: portfolioReducer
    },
    preloadedState
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
