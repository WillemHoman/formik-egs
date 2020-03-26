import {
    FieldInputProps, FieldMetaProps,
    useField
} from "formik";
import React, {FunctionComponent} from "react";

const HookComponent: FunctionComponent<{}> = (props) => {
    const [field, meta] = useField("myHookValue");
    return (
        <div>
            <label>
                <span>Hook Value</span>
                <input
                    // shorthand
                    // {...field}

                    // longhand
                    // initial value
                    value={field.value}
                    // required for formik to know which value to update
                    name={field.name}
                    // trigger change of values[field.name]
                    onChange={event => field.onChange(event)}
                    // triggers validation
                    onBlur={field.onBlur}/>
            </label>
            {meta.touched && meta.error ? (
                <div className="validationError">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default HookComponent;

