import { createGlobalState } from "react-hooks-global-state";

const {setGlobalState, useGlobalState} = createGlobalState({
    language: 'en'
})

export {setGlobalState, useGlobalState}