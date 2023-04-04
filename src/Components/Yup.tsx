import { useFormik } from 'formik';
import * as yup from 'yup';
import "../App.css";

interface FormValues {
    email: string;
    password: string;
};

const Yup = () => {

    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object({
            email: yup.string()
                .email('Invalid Email Address')
                .required('This Field is Required.'),
            password: yup.string()
                .min(6, 'Password is too Short.')
                .max(12, 'Password is too Long.')
                .required('This Field is Required.')
        })
    });

    return (
        <div className='form'>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    Enter User Email:

                    <input
                        type="text"
                        id="email"
                        className='input'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.email ?
                        <div className="error">{formik.errors.email}</div>
                        : ""}
                </label>
                <br />

                <label>
                    Enter User Password:

                    <input
                        type="password"
                        id="password"
                        className='input'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />

                    {formik.errors.password ?
                        <div className="error">{formik.errors.password}</div>
                        : ""
                    }
                </label>

                <br />
                <input type="submit" className='submit' />
            </form>
        </div>
    )
};

export default Yup;