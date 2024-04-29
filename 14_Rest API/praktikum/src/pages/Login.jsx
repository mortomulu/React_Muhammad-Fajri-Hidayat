import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (values) => {
    const dummyUser = { username: 'admin', password: 'password123' };
    
    // Membandingkan nilai yang diinputkan dengan user dummy
    if (values.email === dummyUser.username && values.password === dummyUser.password) {
      // Menyimpan data pengguna ke local storage
      localStorage.setItem('user', JSON.stringify(dummyUser));
      localStorage.setItem('isLoggedIn', true);
      // Me-refresh halaman
      window.location.reload();
    } else {
      // Menampilkan pesan error jika login gagal
      setErrorMessage('Invalid username or password');
    }
  };  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be at least 8 characters")
              .required("Required"),
          })}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <Form className="w-full max-w-lg mx-auto space-y-6">
              <div className="space-y-4">
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
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <label
                    htmlFor="remember-me"
                    className=" block text-sm text-gray-900"
                  >
                    Dont Have an Account?
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to={"/register"}
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white text-xl py-3 rounded-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "loading..." : "Sign in"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
