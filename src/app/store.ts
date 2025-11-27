import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Type untuk state global
export type RootState = ReturnType<typeof store.getState>

// Type untuk dispatch
export type AppDispatch = typeof store.dispatch
