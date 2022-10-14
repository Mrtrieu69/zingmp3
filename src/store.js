import { configureStore } from '@reduxjs/toolkit';
import musicReducer from './features/music/musicSlice';

export const store = configureStore({
    reducer: {
        music: musicReducer,
    },
});
