import { createSlice } from '@reduxjs/toolkit';
import { PLAYLISTS, FAVORITE_SONGS } from '../../data/playlists';

const currentSong = PLAYLISTS['world-music'].list[0];

const initialState = {
    listPlayed: [],
    isLoadingData: false,
    isRandom: false,
    isRepeat: false,
    isFirstStartApp: true,
    isPlaying: false,
    currentSong: currentSong,
    idCurrentSong: 0,
    currentList: 'world-music',
    'favorite-songs': FAVORITE_SONGS,
    'playlist-chill': PLAYLISTS['playlist-chill'].list,
    'chill-hits': PLAYLISTS['chill-hits'].list,
    'world-music': PLAYLISTS['world-music'].list,
};

const stateFromLocalStorage = JSON.parse(localStorage.getItem('music'));

const saveToLocalStorage = (state) => {
    localStorage.setItem('music', JSON.stringify({ ...state, isPlaying: false, isLoadingData: false, listPlayed: [] }));
};

export const musicSlice = createSlice({
    name: 'music',
    initialState: stateFromLocalStorage || initialState,
    reducers: {
        play: (state) => {
            state.isPlaying = true;
        },
        pause: (state) => {
            state.isPlaying = false;
        },
        setSong: (state, action) => {
            const currentList = state.currentList;

            if (action.payload <= -1) {
                state.idCurrentSong = state[currentList].length - 1;
                state.currentSong = state[currentList][state[currentList].length - 1];
            } else if (action.payload >= state[currentList].length) {
                state.idCurrentSong = 0;
                state.currentSong = state[currentList][0];
            } else {
                state.idCurrentSong = action.payload;
                state.currentSong = state[currentList].find((_, id) => id === action.payload);
            }

            saveToLocalStorage(state);
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        toggleIsRepeat: (state) => {
            state.isRepeat = !state.isRepeat;

            saveToLocalStorage(state);
        },
        toggleIsRandom: (state) => {
            state.isRandom = !state.isRandom;

            saveToLocalStorage(state);
        },
        startApp: (state) => {
            state.isFirstStartApp = false;

            saveToLocalStorage(state);
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
        setCurrentList: (state, action) => {
            state.currentList = action.payload;

            saveToLocalStorage(state);
        },
        changePositionSong: (state, action) => {
            const { source, destination } = action.payload;

            const currentList = source.droppableId;
            const [removed] = state[currentList].splice(source.index, 1);
            state[currentList].splice(destination.index, 0, removed);

            saveToLocalStorage(state);
        },
        likeSong: (state, action) => {
            const song = action.payload;
            state[song.type] = state[song.type].map((item) => {
                if (item.id === song.id) {
                    item.isLike = true;
                }
                return item;
            });
            state['favorite-songs'].push({ ...song, isLike: true, type: 'favorite-songs', from: song.type });

            saveToLocalStorage(state);
        },
        unlikeSong: (state, action) => {
            const song = action.payload;
            if (song.from) {
                state[song.from] = state[song.from].map((item) => {
                    if (item.id === song.id) {
                        item.isLike = false;
                    }
                    return item;
                });
            } else {
                state[song.type] = state[song.type].map((item) => {
                    if (item.id === song.id) {
                        item.isLike = false;
                    }
                    return item;
                });
            }
            state['favorite-songs'] = state['favorite-songs'].filter((item) => item.id !== song.id);

            saveToLocalStorage(state);
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
    setCurrentList,
    changePositionSong,
    likeSong,
    unlikeSong,
} = musicSlice.actions;

export default musicSlice.reducer;
