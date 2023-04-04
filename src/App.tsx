import { FC } from "react";
import Formik from "./Components/Formik";
import Yup from "./Components/Yup";
import "./App.css";

const App: FC = () => {
    return (
        <div className='main'>
            <div>
                <h1>
                    Formik
                </h1>

                <Formik />
            </div>

            <div>
                <h1>
                    Yup
                </h1>

                <Yup />
            </div>
        </div>
    )
};

export default App;