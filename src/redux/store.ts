import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';
import thunk from 'redux-thunk';
import { useDispatch } from 'react-redux';

const preloadedState = {
  // Add preloaded state here
};

export const store = configureStore({
  middleware: [thunk],
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
