import React, { useContext } from "react";
import { store } from "#context/store";

const withStore = (Component) => {
    const Wrapper = props => {
        const { state, dispatch } = useContext(store);
        return (
            <Component
                state={state}
                dispatch={dispatch}
                {...props}
            />
        );
    }
    return Wrapper;
}

export default withStore;