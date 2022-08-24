import { UserType } from 'lib/schemas';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState {
  active: UserType | null;
  data: any[];
  isLoading: boolean;
  isError: boolean;
}

export const initialState: IUserState = {
  active: null,
  data: [],
  isLoading: false,
  isError: false,
};

// Slice
export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActive(state, action: PayloadAction<UserType>) {
      state.active = action.payload;
    },
    unsetActive(state) {
      state.active = null;
    },
    loadData(state, action: PayloadAction<UserType[]>) {
      state.data = action.payload;
    },
    flipLoading(state) {
      state.isLoading = false;
    },
    flipError(state) {
      state.isError = false;
    },
  },
});

// Actions
export const { setActive, unsetActive, loadData, flipLoading, flipError } =
  UserSlice.actions;

// Thunks

export default UserSlice.reducer;
