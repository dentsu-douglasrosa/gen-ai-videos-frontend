import { configureStore } from '@reduxjs/toolkit';
import breakpointsReducer from './slices/breakpoints.slice';

const store = configureStore({
    reducer: {
        breakpoints: breakpointsReducer,
    },
});

export default store;
