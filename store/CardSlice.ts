import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Card } from '../entities/card'
import { PaymentCardQueries } from '../api/PaymentCardQueries'
import { CreateCardDTO } from '../entities/CreateCardDTO'
import { MemberPaymentCardQueries } from '../api/MemberPaymentCardQueries'
import { MemberPaymentCard } from '../entities/memberPaymentCard'
import { Member } from '../entities/member'

export interface CardState {
  cards: Card[]
  memberDefaultCard: MemberPaymentCard | null
}

const initialState: CardState = {
  cards: [],
  memberDefaultCard: null
}


export const fetchCards = createAsyncThunk(
  'fetchCards',
  async () => {
    const response = await MemberPaymentCardQueries.fetchAll();
    // Map the response to ensure correct property names
    return response.map((card: any) => ({
      ...card,
      isDefaultMethod: card.isDefault
    }));
  },
);




  export const createCard = createAsyncThunk(
    'createCard',
    async (card: CreateCardDTO, thunkAPI) => {
      return await PaymentCardQueries.createCard(card)
    },
  )

  export const deleteMemberPaymentCard = createAsyncThunk(
    'deleteMemberPaymentCard',
    async (id: number, thunkAPI) => {
      return await MemberPaymentCardQueries.deleteMemberPaymentCard(id)
    },
  )


export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
  //push new category to the state
       addEntry: (state, action: PayloadAction<Card>) => {
        state.cards.push(action.payload)
        },
        resetCards: (state) => {
          state.cards = [];
        },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fetchCards.fulfilled, (state, action) => {
      state.cards = Array.isArray(action.payload) ? action.payload : [];
    })
    .addCase(createCard.fulfilled, (state, action) => {
        // Add user to the state array
        if(action.payload.cardNumber) {
          state.cards.push(action.payload)
        } else {
          alert("Card already added to account")
        }
      })
      .addCase(deleteMemberPaymentCard.fulfilled, (state, action) => {
        // Remove the card from the state array
          state.cards = state.cards.filter(card => card.id !== action.payload.cardId);
        
      })

    
}
})

// Action creators are generated for each case reducer function
// ACTIONS
export const {  resetCards } = cardSlice.actions

export default cardSlice.reducer