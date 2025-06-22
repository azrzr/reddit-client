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

export const fetchComments = createAsyncThunk(
  "threads/fetchComments",
  async (permalink) => {
    try {
      const link = permalink.slice(0, -1);
      const response = await fetch(`https://api.reddit.com${link}.json`);
      if (!response.ok) {
        throw new Error(`HTTP ERROR! Status: ${response.status}`);
      }
      const data = await response.json();
      const commentsOnly = data[1].data.children;
      console.log(commentsOnly);
      const commentsArray = commentsOnly.map((item) => ({
        author: item.data.author,
        created_utc: item.data.created_utc,
        body: item.data.body,
      }));
      console.log(commentsArray);
      return {
        permalink: permalink,
        data: commentsArray,
      };
    } catch (err) {
      throw err;
    }
  }
);

const threadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    searchFilter(state, action) {
      state.data = state.data.filter((thread) =>
        thread.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
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
        comments: {
          loading: false,
          error: "",
          data: [
            {
              author: "",
              created_utc: 0,
              body: "",
            },
          ],
        },
      }));
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      const permalink = action.meta.arg;
      const thread = state.data.find((t) => t.permalink === permalink);
      if (thread) {
        thread.comments.loading = true;
        thread.comments.error = "";
        thread.comments.data = [];
      }
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      const permalink = action.meta.arg;
      const thread = state.data.find((t) => t.permalink === permalink);
      if (thread) {
        thread.comments.loading = false;
        thread.comments.error =
          action.error.message || "Failed to fetch comments";
        thread.comments.data = [];
      }
    });
    builder.addCase(fetchComments.fulfilled, (state, action) => {
      const { permalink, data } = action.payload;
      const thread = state.data.find((t) => t.permalink === permalink);
      if (thread) {
        thread.comments.loading = false;
        thread.comments.error = "";
        thread.comments.data = data;
      }
    });
  },
});

export default threadsSlice.reducer;
export const { searchFilter } = threadsSlice.actions;
