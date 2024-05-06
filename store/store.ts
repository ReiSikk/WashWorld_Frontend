import { configureStore } from '@reduxjs/toolkit'
import { subscriptionSlice } from './SubscriptionSlice'

export const store = configureStore({
  reducer: {
    subscription: subscriptionSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch