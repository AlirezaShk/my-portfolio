import { RootState } from '../app/store'

export const selectStage = (state: RootState) => [
    state.portfolio.stage,
    state.portfolio.delay,
    state.portfolio.status
]
