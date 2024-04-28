import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function Test() {
  return (
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
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(8, "must be 8 character")
          .required("required"),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form action="" className="w-3/4 pt-10 px-10" id="accountForm">
          <h2 className="font-medium text-2xl">Detail Form</h2>
          <div className="mt-4 grid grid-cols-6 row-auto gap-x-10 gap-y-5">
            <div className="first-name col-span-3">
              <label htmlFor="firstName" className="text-base">
                First Name
              </label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                className="w-full mt-3 border-[#CED4DA] rounded"
              />
              <ErrorMessage
                name="firstName"
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
            <button
              id="submit"
              type="submit"
              className="col-span-6 mt-4 mx-8 bg-blue-600 text-white text-xl py-2 rounded-md"
            >
              Create Account
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
