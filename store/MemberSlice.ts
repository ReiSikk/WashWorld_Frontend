import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import * as SecureStore from 'expo-secure-store';
import { createMemberDTO } from '../entities/CreateMemberDTO';
import { MemberQueries } from '../api/MemberQueries';
import { CreateCarDto } from '../entities/CreateCarDTO';
import { CarQueries } from '../api/CarQueries';
import { Car } from '../entities/car';



interface MemberState {
    member: Member | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    memberID: string | null;
    cars: Car[],
    role: Role | null;
    subscriptionStatus: string | null;

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

export const confirmSubscription = createAsyncThunk(
    'member/createSubscription',
    async (payload: ConfirmSubscriptionPayload, thunkAPI) => {
      // Call your API here
      return await MemberQueries.confirmSubscription(payload);
      // You can return the response data and it will be used as the payload for the fulfilled action
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
        }, 
        setMemberID: (state, action: PayloadAction<string>) => {
            state.memberID = action.payload;
        },
        createSubscription: (state, action: PayloadAction<ConfirmSubscriptionPayload>) => {
            state.memberID = action.payload.memberID;
            console.log(action.payload, "action.payload in createSubscription")
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
            .addCase(getMemberDetails.fulfilled, (state, action) => {
                state.member = action.payload;
            })
            .addCase(getMemberCars.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(confirmSubscription.fulfilled, (state, action) => {
                state.subscriptionStatus = 'succeeded';
              })
            .addCase(confirmSubscription.rejected, (state, action) => {
                state.subscriptionStatus = 'failed';
              })
    },
});

export const { setToken, logout, setMemberID, createSubscription } = MemberSlice.actions

export default MemberSlice.reducer;