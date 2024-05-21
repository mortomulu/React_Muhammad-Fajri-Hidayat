import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign Up your account
        </h2>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .min(3, "Must have at least 3 characters")
              .required("Required"),
            lastName: Yup.string()
              .min(3, "Must have at least 3 characters")
              .required("Required"),
            userName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .required("Required"),
            passwordConfirmation: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Required"),
          })}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-lg mx-auto space-y-6">
              <div className="space-y-4">
                <div className="last-name col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    as="textarea"
                    id="firstName"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="firstName"
                    id="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="last-name col-span-3">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="username col-span-6">
                  <label htmlFor="userName">Username</label>
                  <div className="flex mt-3 flex-col">
                    <div className="flex mt-3">
                      <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-l-md border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        @
                      </span>
                      <Field
                        type="text"
                        id="userName"
                        name="userName"
                        className="rounded-none border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Username"
                      />
                    </div>

                    <ErrorMessage
                      name="userName"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                </div>
                <div className="email col-span-6">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@example.com"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="email col-span-6">
                  <label htmlFor="email">Password</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="email col-span-6">
                  <label htmlFor="email">Confirm Password</label>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    id="passwordConfirmation"
                    placeholder="Password"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="passwordConfirmation"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="remember-me"
                    className=" block text-sm text-gray-900"
                  >
                   Have an Account?
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to={"/login"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Sign in
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-xl py-3 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Register;
