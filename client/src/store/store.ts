import { atom } from 'jotai'

import { USER } from '../constants/user'

export const isModalVisibleAtom = atom(false)
export const userAtom = atom(USER)
export const activeContactAtom = atom(null)
export const activeDiscussionAtom = atom(null)
