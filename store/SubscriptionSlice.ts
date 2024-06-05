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

//create thunk
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
    },
    setCarsState: (state, action) => {
      state.cars = action.payload;
    },
    setSelectedPaymentMethodID: (state, action) => {
      state.selectedPaymentMethodID = action.payload;
    },
    resetCarsState: (state) => {
      state.cars = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSubscriptions.fulfilled, (state, action) => {
      state.subscriptions = action.payload;
    });
}
})

export const { selectSubscription, setCarsState, setSelectedPaymentMethodID, resetCarsState  } = subscriptionSlice.actions

export default subscriptionSlice.reducer
