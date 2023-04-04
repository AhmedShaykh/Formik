import { useFormik } from 'formik';
import "../App.css";

interface FormValues {
    email: string;
    password: string;
};

const Formik = () => {

    const formik = useFormik<FormValues>({
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validate: (values) => {
            let error: Partial<FormValues> = {};

            if (!values.email) {
                error.email = 'Email is Required"';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                error.email = "Invalid Email Address";
            } else if (!values.password) {
                error.password = "Password is Required"
            }

            return error;
        }
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

export default Formik;