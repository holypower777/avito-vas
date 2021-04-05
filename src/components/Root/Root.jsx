import React from "react";

import EditForm from "./EditForm";
import Preview from "./Preview";
import { StateProvider } from "#context/store";

const Root = () => {
    return (
        <StateProvider>
            <EditForm />
            <Preview />
        </StateProvider>
    );
};

export default Root;