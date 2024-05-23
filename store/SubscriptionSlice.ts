import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SubscriptionQueries } from '../api/SubscriptionQueries'
import { Subscription } from '../entities/subscription'
import { Card } from '../entities/card'

export interface SubscriptionState {
  subscriptions: Subscription[]
  selectedSubscription: string
  cars: CarState[]
  selectedPaymentMethodID: string;
}

export interface CarState {
  licensePlate: string;
  country: string;
  licensePlateError: string;
  countryError: string;
}


const initialState: SubscriptionState = {
  subscriptions: [],
  selectedSubscription: '',
  cars: [],
  selectedPaymentMethodID: '',
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
  reducers: {
    selectSubscription: (state, action) => {
      state.selectedSubscription = action.payload;
      console.log(state.selectedSubscription, "selected subscription in redux state");
    },
    setCarsState: (state, action) => {
      state.cars = action.payload;
      console.log(state.cars, "cars in redux state");
    },
    setSelectedPaymentMethodID: (state, action) => {
      state.selectedPaymentMethodID = action.payload;
      console.log(state.selectedPaymentMethodID, "selectedPaymentMethodID in redux state");
    },
  },
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
export const { selectSubscription, setCarsState, setSelectedPaymentMethodID  } = subscriptionSlice.actions

export default subscriptionSlice.reducer
