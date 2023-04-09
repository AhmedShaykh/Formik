import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void;
};

const FormThree: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
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
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" style={{ padding: "8px 0" }} />
                <ErrorMessage name="email" />

                <br />

                <button type="submit" className='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default FormThree;