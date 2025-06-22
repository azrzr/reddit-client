import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { subreddits } from "../assets/subreddits";

const initialState = {
  loading: false,
  error: "",
  data: [],
};

export const fetchThreads = createAsyncThunk(
  `threads/fetchThreads`,
  async (index) => {
    try {
      const response = await fetch(
        `https://www.reddit.com/r/${subreddits[index].name}.json`
      );

      if (!response.ok) {
        throw new Error(`HTTP ERROR! Status: ${response.status}`);
      }

      const data = await response.json();
      return data.data.children;
    } catch (err) {
      console.error("Failed to fetch users: ", err);
      throw err;
    }
  }
);

const threadsSlice = createSlice({
  name: "threads",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchThreads.pending, (state) => {
      state.loading = true;
      state.data = [];
      state.error = "";
    });
    builder.addCase(fetchThreads.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
    builder.addCase(fetchThreads.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.data = action.payload.map((thread) => ({
        id: thread.data.id,
        created: thread.data.created,
        subreddit: thread.data.subreddit,
        title: thread.data.title,
        selftext: thread.data.selftext,
        author: thread.data.author,
        ups: thread.data.ups,
        downs: thread.data.downs,
        num_comments: thread.data.num_comments,
        permalink: thread.data.permalink,
      }));
    });
  },
});

export default threadsSlice.reducer;
