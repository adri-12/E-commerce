import {  createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '1', title: 'Learning Redux', content: 'Heloo,asd ,asd ,asd '},
  { id: '2', title: 'Slices...', content: 'Heloo,asd ,asd ,asd '}
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  }
})

export default postsSlice.reducer