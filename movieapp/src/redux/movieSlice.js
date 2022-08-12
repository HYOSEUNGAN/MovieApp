import { createSlice } from "@reduxjs/toolkit";
//createSlice는 Reducer 만드는 것을 도와줌
//action  이름을 만드는 대신 name 이라는 키가 쓰임
//리덕스에 썻던 switch 써서 만든 케이스들을 다함수로 만듬

const initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upcomingMovies: {},
};

export const movieSlice = createSlice({
  name: "Movies",
  initialState,
  reducers: {},
});
