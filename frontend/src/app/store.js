import { configureStore } from '@reduxjs/toolkit';
import beritaReducer from '../features/pembeliSlice'
import berita2Reducer from '../features/berita2';
import dataReducer from '../features/Data';
export const store = configureStore({
  reducer: {
    berita: beritaReducer,
    berita2: berita2Reducer,
    alldata:dataReducer
  },
});
