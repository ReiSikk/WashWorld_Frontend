import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SubscriptionQueries } from '../api/SubscriptionQueries'
import { Subscription } from '../entities/subscription'

export interface SubscriptionState {
  subscriptions: Subscription[]
}

const initialState: SubscriptionState = {
  subscriptions: [],
}


// First, create the thunk
export const fetchSubscriptions = createAsyncThunk(
    'fetchSubscriptions',
    async (thunkAPI) => {
      return await SubscriptionQueries.fetchAll();
    },
  )


export const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSubscriptions.fulfilled, (state, action) => {
      // Add user to the state array
      state.subscriptions = action.payload;
    });
}
})

// Action creators are generated for each case reducer function
// ACTIONS
export const {  } = subscriptionSlice.actions

export default subscriptionSlice.reducer