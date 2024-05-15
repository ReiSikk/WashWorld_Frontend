import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import * as SecureStore from 'expo-secure-store';
import { createMemberDTO } from '../entities/CreateMemberDTO';
import { MemberQueries } from '../api/MemberQueries';


interface MemberState {
    member: Member | null;
    token: string | null;
    loading: boolean;
    error: string | null;
    //cars: Car[]

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
}


const initialState: MemberState = {
    member: null,
    token: null,
    loading: false,
    error: null,
   // cars: []
};

export const login = createAsyncThunk(
    'auth/login',
    async (credentials: {    email: string;
        password: string;
        firstName: string;
        lastName: string;
        phone: string;
        active: boolean;
        joinDate: Date;
        loyaltyPoints: number; }, thunkAPI) => {
        // try {
            
            const response = await MemberQueries.login(credentials.email, credentials.password, credentials.firstName, credentials.lastName, credentials.phone, credentials.active, credentials.joinDate, credentials.loyaltyPoints);
            console.log(response);
            return response;
            

        // } catch (error) {
        //     return thunkAPI.rejectWithValue(error.message);
        // }
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

export const MemberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            console.log("action.payload in setToken", action.payload);
            state.token = action.payload;
        },
        logout: (state) => {
            state.token = '';
            SecureStore.deleteItemAsync('token')
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
          /*   .addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.token = action.payload.access_token;
                SecureStore.setItemAsync('token', action.payload.access_token);
            }) */
       /*      .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            }) */
         /*    .addCase(signup.pending, (state) => {
                state.loading = true;
                state.error = null;
            }) */
        /*     .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.member = action.payload;
            }) */
         /*    .addCase(signup.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            }); */
    },
});

export const { setToken, logout } = MemberSlice.actions
// export const selectUser = (state: RootState) => state.user.user;
// export const selectToken = (state: RootState) => state.user.token;
// export const selectLoading = (state: RootState) => state.user.loading;
// export const selectError = (state: RootState) => state.user.error;

export default MemberSlice.reducer;