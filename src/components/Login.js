import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { loginSchema } from "../schemas";

const initialValues = {
    email: "",
    password: ""
};

const Login = () => {

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema: loginSchema,
        onSubmit: (values, action) => {
            console.log(values);
            action.resetForm();
        }
    });

    return(
        <form className="flex flex-col max-w-[50%] mx-auto m-6 p-6 bg-[#242529] rounded-lg" onSubmit={handleSubmit}>
                <h1 className="font-extrabold text-4xl mx-auto my-2 text-[#008ca8]">Login</h1>
                <div className="input-block mx-auto justify-evenly">
                    <label htmlFor="Email" className="input-label text-white"></label>
                    <input 
                        type="email"
                        autoComplete="off"
                        name="email"
                        id="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-lg p-2 m-2 focus:border-[#008ca8] text-white focus:text-black hover:text-black"
                    />
                    {errors.email && touched.email ? (<p className="form-error text-red-700">{errors.email}</p>) : null}
                </div>
                <div className="input-block mx-auto">
                    <label htmlFor="password" className="input-label text-white"></label>
                    <input 
                        type="password"
                        autoComplete="off"
                        name="password"
                        id="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="bg-[#d3d3d34d] focus:bg-gray-200 hover:bg-gray-200 min-w-96 rounded-lg p-2 m-2 focus:border-[#008ca8] text-white focus:text-black hover:text-black"
                    />
                    {errors.password && touched.password ? (<p className="form-error text-red-700 ">{errors.password}</p>) : null}
                </div>
                <div className="modal-button mx-auto">
                    <button className="m-2 p-2 min-w-96 bg-[#008ca8] hover:text-gray-200 text-white rounded-lg shadow-lg font-bold"><Link to="/">SEND</Link></button>
                </div>
            </form>
    );
}

export default Login;