import React, {createContext, useReducer} from 'react'
import {textReducer, textState} from './genericReducer'

const reduceReducers = (...reducers) => (prevState, value, ...args) =>
    reducers.reduce(
        (newState, reducer) => reducer(newState, value, ...args),
        prevState
    );

const combinedReducer = reduceReducers(textReducer);


const initialState = {
    textValue: 2,
};

const store = createContext(initialState);

const {Provider} = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer(textReducer, initialState)

    return <Provider value = {{state, dispatch}}> {children} </Provider>
};

export { store, StateProvider };