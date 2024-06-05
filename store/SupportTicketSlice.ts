import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SupportTicket } from '../entities/SupportTicket'
import { CreateSupportTicket } from '../entities/CreateSupportTicket'
import { SupportTicketQueries } from '../api/SupportTicketQueries'

export interface SupportTicketState {
  supportTickets: SupportTicket[]
}

const initialState: SupportTicketState = {
  supportTickets: [],
}


// First, create the thunk
export const fetchSupportTickets = createAsyncThunk(
    'fetchSupportTickets',
    async (thunkAPI) => {
      return await SupportTicketQueries.fetchAll();
    },
  )


  export const createSupportTicket = createAsyncThunk(
    'createSupportTicket',
    async (supportTicket: CreateSupportTicket, thunkAPI) => {
      return await SupportTicketQueries.createSupportTicket(supportTicket)
    },
  )



export const supportTicketSlice = createSlice({
  name: 'supportTicket',
  initialState,
  reducers: {
  // i need to push the new category to the state
       addSupportTicket: (state, action: PayloadAction<SupportTicket>) => {
        state.supportTickets.push(action.payload)
        }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchSupportTickets.fulfilled, (state, action) => {
      // Add ticket to the state array
      
      state.supportTickets = action.payload;
    //   state.entities.push(action.payload)
    }),
    builder.addCase(createSupportTicket.fulfilled, (state, action) => {
        // Add user to the state array
        
        state.supportTickets.push(action.payload)
      //   state.entities.push(action.payload)
      })
}
})

// Action creators are generated for each case reducer function
// ACTIONS
export const {  } = supportTicketSlice.actions

export default supportTicketSlice.reducer