import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void;
};

const FormTwo: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ lastName: '' }}
            validationSchema={Yup.object({
                lastName: Yup.string()
                    .max(20, 'Must be 20 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext()
                }, 400);
            }}
        >
            <Form
                style={{ display: 'flex', flexDirection: "column", margin: "1rem 20rem", }}
            >
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" type="text" style={{ padding: "8px 0" }} />
                <ErrorMessage name="lastName" />

                <br />

                <button type="submit" className='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default FormTwo;