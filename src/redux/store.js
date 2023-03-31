import { configureStore } from '@reduxjs/toolkit';
// import { storage } from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { sliceContact } from './sliceContact';
import { sliceFilter } from './sliceFilter';

// const persistConfig = {
//   key: 'root',
//   storage,
//   whiteList: ['contacts'],
// };

// const rootReducer = createReducer({
//   contacts: sliceContact.reducer,
//   filter: sliceFilter.reducer,
// });

// const persistReducerContacts = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: sliceContact.reducer,
    filter: sliceFilter.reducer,
  },
  //   reducer: persistReducerContacts,
  //   middleware: getDefaultMiddleware =>
  // getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //   },
  // }),
});

// export const persistR = persistStore(store);

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch;
