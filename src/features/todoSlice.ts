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
    {
      id: 1,
      title: 'here the first todo example',
      desc: 'example',
      isDone: false,
    },
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
      console.log('data added')
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload)
    },
    updateDone: (state, action: PayloadAction<number>) => {
      const todo = state.list.find((item) => item.id === action.payload)
      if (todo) {
        todo.isDone = !todo.isDone
      }
    },
  },
})

export const { addTodo, deleteTodo, updateDone } = todo.actions
export default todo.reducer
export type { Todo }
