import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Todo = {
  id: number
  title: string
  desc: string
  isDone: boolean
}

type TodoState = {
  list: Todo[]
}

const initialState: TodoState = {
  list: [
    { id: 1, title: 'here first todo example', desc: 'example', isDone: false },
  ],
}

const todo = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (
      state,
      action: PayloadAction<{ title: string; desc: string }>
    ) => {
      state.list.push({
        id: Date.now(),
        title: action.payload.title,
        desc: action.payload.desc,
        isDone: false,
      })
    },
  },
})

export const { addTodo } = todo.actions
export default todo.reducer
