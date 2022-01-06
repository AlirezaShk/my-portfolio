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
//----------------------
interface DynamicKey {
    [key: string]: any
}

export const ColorThemes: DynamicKey = {
    Backend: {
        full: '#8700e1',
        empty: '#ccc'
    },
    Frontend: {
        full: '#00bf93',
        empty: '#ccc'
    },
    Database: {
        full: '#0056f5',
        empty: '#ccc'
    }
}

export interface Skill {
    name: string
    expertise: number
    libs: Array<Skill>
}

export interface SkillCat {
    name: string
    data: Array<Skill>
}
