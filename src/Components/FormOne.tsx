import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface Props {
    handleNext: () => void;
};

const FormOne: React.FC<Props> = ({ handleNext }) => {
    return (
        <Formik
            initialValues={{ firstName: '' }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('Required')
            })}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    handleNext();
                }, 400);
            }}
        >
            <Form
                style={{ display: 'flex', flexDirection: "column", margin: "1rem 20rem", }}
            >
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" type="text" style={{ padding: "8px 0" }} />
                <ErrorMessage name="firstName" />

                <br />

                <button type="submit" className='submit'>Submit</button>
            </Form>
        </Formik>
    );
};

export default FormOne;