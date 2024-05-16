import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WashStationQueries } from '../api/WashStationQueries'
import { WashStation } from '../entities/washStation'

export interface WashStationState {
  washStations: WashStation[]
}

const initialState: WashStationState = {
  washStations: [],
}
console.log("initialState in WashStationSlice.ts", initialState);


// First, create the thunk
export const fetchWashStations = createAsyncThunk(
    'fetchWashStations',
    async (thunkAPI) => {
      return await WashStationQueries.fetchAll();
    },
  )


export const washStationSlice = createSlice({
  name: 'washStation',
  initialState,
  reducers: {
  //push new category to the state
       addEntry: (state, action: PayloadAction<WashStation>) => {
        state.washStations.push(action.payload)
        }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchWashStations.fulfilled, (state, action) => {
      // Add user to the state array
      
      state.washStations = action.payload;
    //   state.entities.push(action.payload)
    })
}
})

// Action creators are generated for each case reducer function
// ACTIONS
export const {  } = washStationSlice.actions

export default washStationSlice.reducer