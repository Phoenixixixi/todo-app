import { configureStore } from '@reduxjs/toolkit'
import todo from '../features/todoSlice'

export const store = configureStore({
  reducer: {
    todo,
  },
})

//exporting type
export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
