import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StepState {
  currentStep: number;
}

const initialState: StepState = {
  currentStep: 1,
};

export const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    setCurrentStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
      console.log(state.currentStep, "current step in redux state");
    },
  },
});

export const { setCurrentStep } = stepSlice.actions;

export default stepSlice.reducer;