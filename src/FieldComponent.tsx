import {
    Field,
    FieldProps
} from "formik";
import React, {FunctionComponent} from "react";

const FieldComponent: FunctionComponent<{}> = (props) => {
    return (
        <div>
            <Field name="myFieldValue" render={({field, form, meta}: FieldProps) => (
                <label>
                    <span>Field Value</span>
                    <input
                        // shorthand
                        // {...field}

                        // longhand
                        // initial value
                        value={field.value}
                        // required for formik to know which value to update
                        name={field.name}
                        // trigger change of values[field.name]
                        onChange={event => form.setFieldValue(field.name, event.target.value)}
                        // triggers validation
                        onBlur={field.onBlur}/>
                    {meta.touched && meta.error ? (
                        <div className="validationError">{meta.error}</div>
                    ) : null}
                </label>
            )}/>
        </div>
    );
};

export default FieldComponent;
