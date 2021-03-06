import {is, assert} from '../index';
import createReducer from './createReducer';

const reducerConfigs = [];

const registeredReducers = {};

export function registerReducer({key, initialState = {}, actionHandlers = {}}) {
    assert(key, is.set, 'Invalid key {val}');
    assert(key, isReducerKeyUnique, 'There is already another reducer registered with the key {val}');

    reducerConfigs.push({
        key,
        initialState,
        actionHandlers
    });

    registeredReducers[key] = createReducer({
        initialState,
        actionHandlers
    });

    return registeredReducers[key];
}

export function getRegisteredReducers() {
    return registeredReducers;
}

export function getCombinedInitialState() {
    const initialValue = {};

    return reducerConfigs
        .reduce(
            (accumulator, reducerConfig) => {
                // eslint-disable-next-line no-param-reassign
                accumulator[reducerConfig.key] = reducerConfig.initialState;
                return accumulator;
            },
            initialValue
        );
}

function findReducerConfig(key) {
    return reducerConfigs.find((reducer) => reducer.key === key);
}

function isReducerKeyUnique(key) {
    return typeof findReducerConfig(key) === 'undefined';
}