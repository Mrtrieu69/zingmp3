import { createSlice } from '@reduxjs/toolkit';
import FAVORITE_SONGS from '../../data/favoriteSongs';

const currentSong = FAVORITE_SONGS[0];

const initialState = {
    isFirstStartApp: true,
    isPlaying: false,
    currentSong,
    currentList: FAVORITE_SONGS,
    favoriteSongs: FAVORITE_SONGS,
};

export const musicSlice = createSlice({
    name: 'music',
    initialState,
    reducers: {
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        },
        setSong: (state, action) => {
            if (action.payload <= -1) {
                state.currentSong = state.currentList[state.currentList.length - 1];
            } else if (action.payload >= state.currentList.length) {
                state.currentSong = state.currentList[0];
            } else {
                state.currentSong = state.currentList.find((song) => song.id === action.payload);
            }
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        startApp: (state) => {
            state.isFirstStartApp = false;
        },
    },
});

export const { togglePlay, setSong, pause, play, startApp } = musicSlice.actions;

export default musicSlice.reducer;
