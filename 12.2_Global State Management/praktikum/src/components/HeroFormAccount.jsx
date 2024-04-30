import { useGlobalState } from "../state/global";
import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import ArticleAcc from "../assets/dataAcc";

export default function HeroFormAccount() {
  // global state untuk mengganti bahasa
  const [lang] = useGlobalState("language");
  const title = ArticleAcc.title?.[lang];
  const teks = ArticleAcc.description?.[lang];

  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastName: "",
  //     userName: "",
  //     email: "",
  //     gender: "",
  //     address: "",
  //     nationality: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .min(3, "must have minimal 4 char")
  //       .required("required"),
  //     lastName: Yup.string()
  //       .min(3, "must have minimal 4 char")
  //       .required("required"),
  //     userName: Yup.string().required("required"),
  //     email: Yup.string().email("invalid email address").required("required"),
  //   }),
  // });

  return (
    <>
      <section className="flex justify-center flex-col items-center gap-4 mt-20 mx-44 py-8">
        <div className="flex justify-center flex-col items-center gap-4">
          <svg
            width={72}
            height={57}
            viewBox="0 0 72 57"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_318_4729)">
              <path
                d="M8.12608 7.44912C7.99112 3.57368 11.0106 0 15.092 0H56.9133C60.9947 0 64.0142 3.57368 63.8792 7.44912C63.7496 11.1719 63.9179 15.9942 65.1315 19.9263C66.3491 23.8704 68.4022 26.3635 71.7648 26.6838V30.3162C68.4022 30.6365 66.3491 33.1296 65.1315 37.0737C63.9179 41.0058 63.7496 45.8281 63.8792 49.551C64.0142 53.4263 60.9947 57 56.9133 57H15.092C11.0106 57 7.99112 53.4263 8.12622 49.551C8.25573 45.8281 8.08738 41.0058 6.87362 37.0737C5.65622 33.1296 3.59807 30.6365 0.235352 30.3162V26.6838C3.59793 26.3635 5.65622 23.8704 6.87362 19.9263C8.08738 15.9942 8.25573 11.1719 8.12608 7.44912Z"
                fill="url(#paint0_linear_318_4729)"
              />
              <g filter="url(#filter0_d_318_4729)">
                <path
                  d="M37.5512 43.6521C44.1588 43.6521 48.1406 40.4168 48.1406 35.0805C48.1406 31.0467 45.2995 28.1265 41.081 27.6642V27.4961C44.1803 26.9919 46.6125 24.1137 46.6125 20.8993C46.6125 16.3194 42.9966 13.3359 37.4866 13.3359H25.0891V43.6521H37.5512ZM29.9104 17.1806H36.3244C39.8112 17.1806 41.7912 18.7353 41.7912 21.5505C41.7912 24.5549 39.4883 26.2355 35.3128 26.2355H29.9104V17.1806ZM29.9104 39.8075V29.8282H36.2812C40.8442 29.8282 43.2118 31.5089 43.2118 34.7864C43.2118 38.0637 40.9088 39.8075 36.5611 39.8075H29.9104Z"
                  fill="url(#paint1_linear_318_4729)"
                />
                <path
                  d="M37.5512 43.6521C44.1588 43.6521 48.1406 40.4168 48.1406 35.0805C48.1406 31.0467 45.2995 28.1265 41.081 27.6642V27.4961C44.1803 26.9919 46.6125 24.1137 46.6125 20.8993C46.6125 16.3194 42.9966 13.3359 37.4866 13.3359H25.0891V43.6521H37.5512ZM29.9104 17.1806H36.3244C39.8112 17.1806 41.7912 18.7353 41.7912 21.5505C41.7912 24.5549 39.4883 26.2355 35.3128 26.2355H29.9104V17.1806ZM29.9104 39.8075V29.8282H36.2812C40.8442 29.8282 43.2118 31.5089 43.2118 34.7864C43.2118 38.0637 40.9088 39.8075 36.5611 39.8075H29.9104Z"
                  stroke="white"
                  strokeWidth="0.139706"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_318_4729"
                x="22.784"
                y="11.5896"
                width="27.6618"
                height="34.9264"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.558824" />
                <feGaussianBlur stdDeviation="1.11765" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_318_4729"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_318_4729"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_318_4729"
                x1="10.864"
                y1="1.50855"
                x2="73.3686"
                y2="51.1247"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9013FE" />
                <stop offset={1} stopColor="#6610F2" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_318_4729"
                x1="27.2695"
                y1="15.3314"
                x2="41.2409"
                y2="38.9601"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset={1} stopColor="#F1E5FC" />
              </linearGradient>
              <clipPath id="clip0_318_4729">
                <rect
                  width="71.5294"
                  height={57}
                  fill="white"
                  transform="translate(0.235352)"
                />
              </clipPath>
            </defs>
          </svg>
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-center text-xl text-[#212529] font-light">
            {teks}
          </p>
        </div>
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
                <div className="gender col-span-6">
                  <label>Gender</label>
                  <div className="mt-3">
                    <Field
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      className="mr-1"
                    />
                    <label htmlFor="male" className="ml-1">
                      Male
                    </label>
                  </div>
                  <div className="mt-1">
                    <Field
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      className="mr-1"
                    />
                    <label htmlFor="female" className="ml-1">
                      Female
                    </label>
                  </div>
                  <div className="mt-1">
                    <Field
                      type="radio"
                      name="gender"
                      id="other"
                      value="other"
                      className="mr-1"
                    />
                    <label htmlFor="other" className="ml-1">
                      Other
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="address col-span-6">
                  <label htmlFor="address">Address</label>
                  <Field
                    type="text"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="address-2 col-span-6">
                  <label htmlFor="address2">
                    Address 2 <span className="text-[#6C757D]">(Optional)</span>
                  </label>
                  <Field
                    type="text"
                    name="address2"
                    id="address2"
                    placeholder="Apartment or suite"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                </div>
                <div className="nationality col-span-6">
                  <label htmlFor="nationality">Nationality</label>
                  <Field
                    as="select"
                    id="nationality"
                    name="nationality"
                    autoComplete="country-name"
                    className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="Indonesia">Indonesia</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Bekasi">Bekasi</option>
                  </Field>
                </div>
                <div className="language col-span-6 border-t-2">
                  <label>Language Spoken</label>
                  <div className="mt-3 w-full">
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name="language"
                        id="bahasa"
                        className="mr-1"
                      />
                      <label htmlFor="bahasa" className="ml-2">
                        Bahasa
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name="language"
                        id="english"
                        className="mr-1"
                      />
                      <label htmlFor="english" className="ml-2">
                        English
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Field
                        type="checkbox"
                        name="language"
                        id="others"
                        className="mr-1"
                      />
                      <label htmlFor="others" className="ml-2">
                        Others
                      </label>
                    </div>
                  </div>
                  <ErrorMessage
                    name="language"
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
        ;
      </section>
    </>
  );
}
