import {Formik, FormikErrors, FormikProps} from "formik";
import React from 'react';
import FieldComponent from "./FieldComponent";
import HookComponent from "./HookComponent";


const initialValues = {
    myHookValue: "Hooks Rule",
    myFieldValue: "Fields Suck"
};

export interface FormValues {
    myHookValue: string
    myFieldValue: string
}

const PromotionForm = (
    {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
    }: FormikProps<FormValues>) => (
    <form onSubmit={handleSubmit}>
        <HookComponent/>
        <FieldComponent/>
        <button type="submit">Submit</button>
        <div className="well">
            <p>Hook: {values.myHookValue}</p>
            <p>Field: {values.myFieldValue}</p>
        </div>
    </form>
);

const App: React.FC = () => (
    <>
        <h1>Formik</h1>
        <Formik
            initialValues={initialValues}
            onSubmit={(values: FormValues) => console.log(values)}
            validate={(values: FormValues) => {
                const errors: FormikErrors<FormValues> = {};
                if (!values.myHookValue) {
                    errors.myHookValue = "Hook Value Required";
                }
                if (!values.myFieldValue) {
                    errors.myFieldValue = "Field Value Required";
                }
                return errors;
            }}
            component={PromotionForm}/>
    </>
);
export default App;
