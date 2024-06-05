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


  export const createTicket = createAsyncThunk(
    'createTicket',
    async (supportTicket: CreateSupportTicket, thunkAPI) => {
      return await SupportTicketQueries.createSupportTicket(supportTicket)
    },
  )



export const supportTicketSlice = createSlice({
  name: 'supportTicket',
  initialState,
  reducers: {
       addSupportTicket: (state, action: PayloadAction<SupportTicket>) => {
        state.supportTickets.push(action.payload)
        }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSupportTickets.fulfilled, (state, action) => {
      // Add ticket to the state array
      
      state.supportTickets = action.payload;
    //   state.entities.push(action.payload)
    }),
    builder.addCase(createTicket.fulfilled, (state, action) => {
        // Add picture to the state array
        
        state.supportTickets.push(action.payload)
      //   state.entities.push(action.payload)
      })
}
})


export const {  } = supportTicketSlice.actions

export default supportTicketSlice.reducer