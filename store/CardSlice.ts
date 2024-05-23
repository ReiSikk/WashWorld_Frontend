import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../entities/card'
import { PaymentCardQueries } from '../api/PaymentCardQueries'
import { CreateCardDTO } from '../entities/CreateCardDTO'
import { MemberPaymentCardQueries } from '../api/MemberPaymentCardQueries'

export interface CardState {
  cards: Card[]
}

const initialState: CardState = {
  cards: [],
}
console.log("initialState in CardSlice.ts", initialState);


// First, create the thunk
export const fetchCards = createAsyncThunk(
    'fetchCards',
    async (thunkAPI) => {
      return await MemberPaymentCardQueries.fetchAll();
    },
  )


  export const createCard = createAsyncThunk(
    'createCard',
    async (card: CreateCardDTO, thunkAPI) => {
      console.log("createCard in CardSlice called with:", card);
      return await PaymentCardQueries.createCard(card)
    },
  )
  


/*   export const deleteCard = createAsyncThunk(
    'deleteCard',
    async (id: number, thunkAPI) => {
      return await PaymentCardQueries.deleteCard(id)
    },
  ) */



export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
  //push new category to the state
       addEntry: (state, action: PayloadAction<Card>) => {
        state.cards.push(action.payload)
        }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = Array.isArray(action.payload) ? action.payload : [];
    }),
    builder

    .addCase(createCard.fulfilled, (state, action) => {
        // Add user to the state array
        console.log("createCard.fulfilled in cardSlice called with:", action.payload);
        if(action.payload.cardNumber) {
          state.cards.push(action.payload)
        } else {
          alert("Card already added to account")
        }
      })
}
})

// Action creators are generated for each case reducer function
// ACTIONS
export const {  } = cardSlice.actions

export default cardSlice.reducer