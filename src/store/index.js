import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong'
        addSong(state,action){
            // state is not the Big state
            // in the store
            // it is the piece of state management
            // by this reducer
            state.push(action.payload);
        },
        // 'song' + '/' + 'removeSong' = 'song/removeSong'
        removeSong(state,action){
            //...
        }
    }
});

const moviesSlice = createSlice({
    name: 'movie',
    initialState: [],
    reducers: {
        addMovie(state,action){
            state.push(action.payload);
        },
        removeMovie(state,action){
            //...
        }
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer,
        movies: moviesSlice.reducer
    }
});

export { store };

// console.log(store);

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// console.log(songsSlice.actions.addSong());

// store.dispatch({
//     type: 'song/addSong',
//     payload: 'New Song!!!'
// });

// store.dispatch(moviesSlice.actions.addMovie("New Movie!!!"));

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));