import { createSlice } from '@reduxjs/toolkit';
import { FAVORITE_SONGS } from '../../data/playlists';

const currentSong = FAVORITE_SONGS[0];

const initialState = {
    listPlayed: [],
    isLoadingData: false,
    isRandom: false,
    isRepeat: false,
    isFirstStartApp: true,
    isPlaying: false,
    currentSong,
    currentList: 'favorite-songs',
    'favorite-songs': FAVORITE_SONGS,
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
                state.currentSong = state[state.currentList][state[state.currentList].length - 1];
            } else if (action.payload >= state[state.currentList].length) {
                state.currentSong = state[state.currentList][0];
            } else {
                state.currentSong = state[state.currentList].find((song) => song.id === action.payload);
            }
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        toggleIsRepeat: (state) => {
            state.isRepeat = !state.isRepeat;
        },
        toggleIsRandom: (state) => {
            state.isRandom = !state.isRandom;
        },
        startApp: (state) => {
            state.isFirstStartApp = false;
        },
        setListPlayed: (state, action) => {
            if (state.listPlayed.includes(action.payload)) {
                state.listPlayed = [];
            }
            state.listPlayed.push(action.payload);
        },
        setIsLoadingData: (state, action) => {
            state.isLoadingData = action.payload;
        },
    },
});

export const {
    togglePlay,
    setSong,
    pause,
    play,
    startApp,
    toggleIsRepeat,
    toggleIsRandom,
    setListPlayed,
    setIsLoadingData,
} = musicSlice.actions;

export default musicSlice.reducer;
