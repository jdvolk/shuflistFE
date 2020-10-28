import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'User',
  initialState : {
    isLoggedIn : false,
    userInput: '',
    userInfo : {
      userId : '',
      userName: '',
      favorites : [],
      following: [],
      followers: [],
      posts : [
        {
          "id": 0,
          "song" : {},
          "comments" : [],
        },
      ],
      settings : [],
    },
  },
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload
      state.isLoggedIn = true;
    },
    
    logout: (state) => {
      state.userInfo = ''
      state.isLoggedIn = true;
    },
    
    resetInput: state => {
      state.userInput = ''
    },
  },
});

export const { login, logout, resetInput } = userSlice.actions;

export const getUser = () => async dispatch => {
  try {
    const response = await fetch("/user_data.json",
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
    const parsed = await response.json();
    dispatch(login(parsed));
  } catch (error){
    console.error(error)
  } finally {
    // dispatch(resetInput())
  }
}
export const selectUser = state => state.user;
export const selectUserInput = state => state.user.userInfo.userInput;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
// export const selectUserPosts = state => state.user.userInfo.posts;

export default userSlice.reducer;
