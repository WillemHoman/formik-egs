import {useFormikContext} from "formik";
import React, {FunctionComponent} from 'react';


const Debug: FunctionComponent<{}> = () => {
    const context = useFormikContext();
    return (
        <pre className="well">
            {JSON.stringify(context, undefined, 2)}
        </pre>
    );
};

export default Debug;
