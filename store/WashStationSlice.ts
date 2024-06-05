import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WashStationQueries } from '../api/WashStationQueries'
import { WashStation } from '../entities/washStation'

export interface WashStationState {
  washStations: WashStation[]
    isStationOpen: boolean
}

const initialState: WashStationState = {
  washStations: [],
isStationOpen: false
}


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
    builder
    .addCase(fetchWashStations.fulfilled, (state, action) => {
      // Add user to the state array
      
      state.washStations = action.payload;
    //   state.entities.push(action.payload)
    })
}
})

export const {  } = washStationSlice.actions

export default washStationSlice.reducer