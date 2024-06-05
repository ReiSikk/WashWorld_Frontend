import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { createMemberDTO } from '../entities/CreateMemberDTO';
import { MemberQueries } from '../api/MemberQueries';
import { CreateCarDto } from '../entities/CreateCarDTO';
import { CarQueries } from '../api/CarQueries';
import { Car } from '../entities/car';
import { MemberPaymentCard } from '../entities/memberPaymentCard';
import { MemberPaymentCardQueries } from '../api/MemberPaymentCardQueries';
import { cardSlice } from './CardSlice';




interface MemberState {
    member: Member | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    memberID: string | null;
    cars: Car[],
    role: Role | null;
    subscriptionStatus: string | null;
    isAuthenticated: boolean | null
    memberDefaultCard: MemberPaymentCard | null;

}

interface Member {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: string;
    active: boolean;
    joinDate: Date;
    loyaltyPoints: number;
    role: Role
}


interface ConfirmSubscriptionPayload {
    memberID: string;
    createCarDtos: CreateCarDto[];
    paymentMethodID: string;
  }

 export enum Role {

    User = 'user',
    Admin = 'admin',
} 

const initialState: MemberState = {
    member: null,
    token: null,
    loading: false,
    error: null,
    memberID: null,
    cars: [],
    role: null,
    subscriptionStatus: 'none',
    isAuthenticated: null,
    memberDefaultCard: null,
};

 export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, thunkAPI) => {
    
            const response = await MemberQueries.login(credentials.email, credentials.password);
            return response;
            
    }
); 

export const signup = createAsyncThunk(
    'auth/signup',
    async (member: createMemberDTO, thunkAPI) => {
        // try {
            const response = MemberQueries.signup(member)
            return response;
            
            
        // } catch (error) {
        //     return thunkAPI.rejectWithValue(error.message);
        // }
    }
);

export const getProfile = createAsyncThunk(
    'auth/profile',
    async (thunkAPI) => {
            return await MemberQueries.getMember();
    },
);
export const checkTokenValidity = createAsyncThunk(
    'auth/profile/check-token',
    async (thunkAPI) => {
            return await MemberQueries.getTokenValidity();
    },
);

export const getMemberDetails = createAsyncThunk(
    'auth/profile/details',
    async (memberID: number, thunkAPI) => {
            return await MemberQueries.getMemberDetails(memberID);
    },
);
export const getMemberCars = createAsyncThunk(
    'getMemberCars',
    async (thunkAPI) => {
            return await CarQueries.fetchAll();
    },
);

export const updateMemberPaymentCard = createAsyncThunk(
    'updateCards',
    async (payload: {cardId: number, updatedStatus: boolean}, thunkAPI) => {
      // Call your API here
      const response =  await MemberPaymentCardQueries.updateMemberPaymentCard(payload.cardId, payload.updatedStatus);
      return response;
    });


export const confirmSubscription = createAsyncThunk(
    'member/createSubscription',
    async (payload: ConfirmSubscriptionPayload, thunkAPI) => {
      // Call your API here
      const response =  await MemberQueries.confirmSubscription(payload);
      return response;
    });


export const MemberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        }, 
         logout: (state) => {
            state.token = '';
            SecureStore.deleteItemAsync('token')
            state.isAuthenticated = false;
            state.subscriptionStatus = 'none';
            state.memberID = null;
            state.member = null;
        }, 
        setMemberID: (state, action: PayloadAction<string>) => {
            state.memberID = action.payload;
        },
        resetSubscriptionStatus: (state) => {
            state.subscriptionStatus = 'none';
        },

        createSubscription: (state, action: PayloadAction<ConfirmSubscriptionPayload>) => {
            state.memberID = action.payload.memberID;
            MemberQueries.confirmSubscription(action.payload);
          }
    },
    extraReducers: (builder) => {
        builder
             .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            }) 
            .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.access_token;
                state.role = action.payload.role;
                SecureStore.setItemAsync('token', action.payload.access_token);
            }) 
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            }) 
            .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            }) 
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.member = action.payload;
            }) 
           .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.memberID = action.payload;
            })
              .addCase(checkTokenValidity.fulfilled, (state, action: PayloadAction<boolean>) => {
                state.isAuthenticated = action.payload;
              })
            .addCase(getMemberDetails.fulfilled, (state, action) => {
                state.member = action.payload;
            })
            .addCase(getMemberCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(confirmSubscription.rejected, (state, action) => {
                state.subscriptionStatus = 'failed';
              })
            .addCase(confirmSubscription.fulfilled, (state, action) => {
                console.log(action.payload, "action.payload");
                if(action.payload.success) {
                    state.subscriptionStatus = 'succeeded';
                } else {
                    alert(`${action.payload.message}, please try again.`);
                }

              })
            .addCase(updateMemberPaymentCard.fulfilled, (state, action) => {
                state.memberDefaultCard = action.payload;
              }
            )
    },
});

export const { setToken, logout, setMemberID, createSubscription, resetSubscriptionStatus } = MemberSlice.actions

export default MemberSlice.reducer;