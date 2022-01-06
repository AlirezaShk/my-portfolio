import { createAction } from '@reduxjs/toolkit'
import { DELETE_ONE, WRITE_ONE, WRITEPOS_ONE } from './actionTypes'

export const writeOne = createAction<number>(WRITE_ONE)
export const deleteOne = createAction(DELETE_ONE)
export const writePositionOne = createAction<number>(WRITEPOS_ONE)
