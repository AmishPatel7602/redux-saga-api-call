import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { loginRequest } from "../redux/actions/authActions";

const Login = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email!").required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const onSubmit = (values) => {
    dispatch(loginRequest(values));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <Toaster position="top-right" />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
          Login
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-5">
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium py-2 px-4 rounded w-full"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
