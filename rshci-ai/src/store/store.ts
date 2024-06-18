import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import logger from 'redux-logger';


import utils from './features/utils';

export const store = configureStore({
    reducer: {
        utils,
    }, 
    devTools:process.env.NODE_ENV !== 'production',
    middleware:getDefaultMiddleware => getDefaultMiddleware({}).concat(process.env.NODE_ENV !== 'production' ? [logger]:[])
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;