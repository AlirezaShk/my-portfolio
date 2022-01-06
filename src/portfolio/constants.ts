export interface StageState {
    stage: number
    status: 'loading1' | 'idle'
    delay: number
}

export enum RoleWriterDelay {
    Stage = 700,
    Switch = 500,
    Write = 150,
    Delete = 75
}

export interface ChangeStagePayload {
    stage: number
}

export interface ChangeStatusPayload {
    status: 'loading1' | 'idle'
    delay: number
}
