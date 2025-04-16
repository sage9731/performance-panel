import {createContext, useContext} from 'react';

export const ConfigContext = createContext({});

export function useConfig() {
    return useContext(ConfigContext);
}