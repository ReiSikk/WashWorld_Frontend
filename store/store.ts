import { configureStore } from '@reduxjs/toolkit'
import { subscriptionSlice } from './SubscriptionSlice'
import { stepSlice } from './StepSlice'
import { cardSlice } from './CardSlice'
import { washStationSlice } from './WashStationSlice'

export const store = configureStore({
  reducer: {
    subscription: subscriptionSlice.reducer,
    step: stepSlice.reducer,
    cards: cardSlice.reducer,
    washStations: washStationSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch