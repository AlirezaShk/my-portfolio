export interface RoleState {
    value: string
    status: 'idle' | 'writing' | 'deleting' | 'waiting'
    index: number
    position: string
}

export const RoleArchive = ['Frontend ', 'Backend ', 'Full Stack ']
export const Position = 'Senior '

export enum RoleWriterDelay {
    Stage = 700,
    Switch = 500,
    Write = 150,
    Delete = 75
}
