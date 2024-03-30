import { Link } from "react-router-dom";

export default function AboutMe() {
  return (
    <div className="flex flex-col">
      <Link to={'/'}>
        <div className="absolute top-8 left-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </div>
      </Link>
      <div className="relative">
        <div className="absolute top-64 left-64">
          <div className="border-4 bg-white border-black px-4 py-2 rounded-md w-fit">
            Mobile Developer
          </div>
          <div className="border-4 bg-white border-black px-4 py-2 rounded-md w-fit mt-4">
            Frontend Developer
          </div>
          <div className="border-4 bg-white border-black px-4 py-2 rounded-md w-fit mt-4">
            and other...
          </div>
        </div>
      </div>
      <div className="Section1 pt-16 flex justify-around">
        <div className="-ml-52">
          <svg
            width="500px"
            height="500px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m20.3 35.76a36.16 36.16 0 0 1 1.42-12.71 50.23 50.23 0 0 1 7.83-15.13c2.09-2.92 3.45-3.54 4.84-3.33s5.54 5.92 8 13.12 2.12 16.42 2.12 17.42 0 1.58 0 1.58 4.87-.66 6 4.92.25 10.5-1.58 13.67-4.71 3.46-5 3 1-5.17-.21-8.34-2.13-3.41-2.13-3.41a14.5 14.5 0 0 1 -1.37 3 6.59 6.59 0 0 1 -1.75.25s.08 2.08-.13 2.12-3.54 0-3.54 0-.71 6.67-1.25 7.13-3.66.5-3.66 0-1.13-7.05-1.13-7.05-1.87-.16-1.92-.37-.37-2.21-.37-2.21a4.42 4.42 0 0 1 -1.47-.42c-.25-.25-2.17-3-2.17-3a11.87 11.87 0 0 0 -2.5 5.5c-.25 2.79 1.63 5.91 1.46 6.2s-3 .71-6-3.91-3.5-9-2.29-12.88 4.39-5.32 6.8-5.15z"
              fill="#1d1d1b"
            />
            <path
              d="m28.22 13.13c.17-.21 4.54-7.08 5.75-7s4.75 6.63 4.5 6.75a17.14 17.14 0 0 0 -5.29-.5 22.88 22.88 0 0 0 -4.96.75z"
              fill="#e7413e"
            />
            <path
              d="m26.84 14.8a16.59 16.59 0 0 1 6.71-1.29c3.75.08 5.42.83 5.63 1.08a36.47 36.47 0 0 1 3 8.92 27.26 27.26 0 0 1 .41 4.83s-1.12-1.46-1.37-1.34-.38.67-.38.67a16.3 16.3 0 0 1 1.75 1.71c0 .21.13 2 .13 2s-2.13-2.71-2.38-2.58-.54.46-.41.62 2.71 2.92 2.83 3.21a8.93 8.93 0 0 1 0 1.83s-3.25-3.46-3.42-3.46-.62.42-.29.63a45 45 0 0 1 3.67 4.08c0 .21-.13 2.25-.13 2.25s-3.5-4.12-3.66-4.08-.42.42-.34.58 3.88 4.13 3.88 4.5a16.51 16.51 0 0 1 -.42 2s-3.71-4.75-3.83-4.71-.54.34-.46.5 4.08 5 4 5.38a4.81 4.81 0 0 1 -.54 1.62c-.17.09-3.62-4.54-3.79-4.54s-.42.46-.42.46a61.77 61.77 0 0 1 3.63 5.08c-.09.25-.46 1-.46 1s-3.04-3.83-3.18-3.87-.58.5-.42.67a40.45 40.45 0 0 1 3.34 4c-.09.21-.5 1.46-.5 1.46h-.63a20.58 20.58 0 0 0 -2-2.59c-.25 0-.54.42-.54.59s1.71 2 1.54 2.08-2.46.08-2.46.08.5-8.62.09-9.29a2.25 2.25 0 0 0 -2.42-1.21 18.69 18.69 0 0 0 -4.79 1.54c-1 .55-.75 2.46-.63 3.21a50.21 50.21 0 0 1 .76 5.58 9.25 9.25 0 0 1 -2.16 0c-.18-.12-3.67-3.91-4.18-10.87a40.39 40.39 0 0 1 2.71-17.21c1.43-3.62 2.13-5.12 2.13-5.12z"
              fill="#a42116"
            />
            <path
              d="m29.43 40.42c.12-.62 4.21-1.29 4.37-.79s-1.21 17.83-1.46 18-.83.46-1 .13-2.12-16.3-1.91-17.34z"
              fill="#e7413e"
            />
            <path
              d="m27.55 49.59c.21 0 .79-.21.88 0s.21 1.33.08 1.29-.87.17-1-.08a6.38 6.38 0 0 1 .04-1.21z"
              fill="#f2910d"
            />
            <path
              d="m35.22 49.55a9.53 9.53 0 0 1 2.21.12c0 .17 0 1.34-.13 1.34a13.31 13.31 0 0 1 -2.3-.09c0-.12.22-1.37.22-1.37z"
              fill="#f2910d"
            />
            <path
              d="m44.55 38.26a10.19 10.19 0 0 1 3.09 1.29c1 .71 1.54 5.12 1.54 5.12s-2.63-1.67-2.75-1.67-.38.79-.13.91a24.87 24.87 0 0 1 2.88 1.71 22.82 22.82 0 0 1 0 2.29 14.1 14.1 0 0 0 -2.5-1.46c-.13.17-.13.75.12.88a9.63 9.63 0 0 1 2.25 1.67 10.7 10.7 0 0 1 -.12 1.92l-.09.38s-1.75-1.25-2-1.17-.5.42-.25.67 2 1.37 1.88 1.62a7.46 7.46 0 0 1 -1.42 2.46 6.57 6.57 0 0 1 -1.54 1.08s.88-5.66-.62-8.16-2.38-2.67-2.38-2.67a35.41 35.41 0 0 0 1.25-3.92c.58-2.29.79-2.95.79-2.95z"
              fill="#e7413e"
            />
            <path
              d="m20.14 37.3a21.61 21.61 0 0 0 .86 4.7c.71 2.3 1 3 1 3s-1.54.58-2.67 3.87a9.36 9.36 0 0 0 -.29 5.67s-2.5-1.46-3.83-7.17.88-9.49 4.93-10.07z"
              fill="#e7413e"
            />
            <path
              d="m18.43 40.3.37.83a3 3 0 0 0 -1.25.92c-.46.62-.21 1.58-.41 1.66s-.75.13-.84 0a5 5 0 0 1 .38-2.21 2.18 2.18 0 0 1 1.75-1.2z"
              fill="#1d1d1b"
            />
            <path
              d="m32.05 17.71c2.27-.81 6 .5 6.34 5.38s-5.25 8.25-8.46 5.29-3.13-8.79 2.12-10.67z"
              fill="#1d1d1b"
            />
            <path
              d="m33.05 19a3.14 3.14 0 0 1 3.21 2.5 15.07 15.07 0 0 1 .29 3.13 23.87 23.87 0 0 0 -2-3.33c-.25 0-.79.33-.67.5a28.13 28.13 0 0 1 2.21 3.87 3 3 0 0 1 -3.71 1.75c-2.58-.75-3.62-4.08-3-5.87s1.96-2.42 3.67-2.55z"
              fill="#ddc07c"
            />
            <g fill="#1d1d1b">
              <path d="m31.39 20.67a.44.44 0 0 1 .58.42c0 .25-.92.92-.92 1.5s.21.75-.12.87-1.13.05-1.13-.2a3.7 3.7 0 0 1 .38-1.8 2 2 0 0 1 1.21-.79z" />
              <path d="m32.51 22.67c0-.18.58-.54.83-.25s1.66 2.58 1.42 2.84-.42.54-.67.37a12.54 12.54 0 0 1 -1.58-2.96z" />
              <path d="m32.05 24c.25-.09 1.13 1.75 1 1.88s-.58.33-.79.17a4.57 4.57 0 0 1 -.92-1.42 1.84 1.84 0 0 1 .71-.63z" />
              <path d="m32.31 15a.49.49 0 0 1 .47.72.57.57 0 0 1 -.94.05.54.54 0 0 1 .47-.77z" />
              <path d="m35.12 15.05a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94.05.53.53 0 0 1 .46-.77z" />
              <path d="m37.53 16.74a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m39.1 19.49a.49.49 0 0 1 .48.72.58.58 0 0 1 -.95.05.54.54 0 0 1 .47-.77z" />
              <path d="m39.64 22.55a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m39.56 25.41a.48.48 0 0 1 .47.71.56.56 0 0 1 -.94.05.53.53 0 0 1 .47-.76z" />
              <path d="m37.89 28.7a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94 0 .53.53 0 0 1 .46-.72z" />
              <path d="m34.83 30.09a.49.49 0 0 1 .47.72.56.56 0 0 1 -.94.05.54.54 0 0 1 .47-.77z" />
              <path d="m30.76 30.28a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m27.66 28.09a.49.49 0 0 1 .48.72.56.56 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m26 24.84a.49.49 0 0 1 .48.72.56.56 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m26.18 20.82a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94.05.54.54 0 0 1 .46-.77z" />
              <path d="m27.93 17.68a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94 0 .53.53 0 0 1 .46-.72z" />
              <path d="m30.14 16a.49.49 0 0 1 .48.72.57.57 0 0 1 -.94 0 .53.53 0 0 1 .46-.72z" />
            </g>
          </svg>
        </div>
        <div className="-ml-20 flex flex-col gap-2 w-80">
          <h1 className="font-bold text-5xl">I Always</h1>
          <h2 className="font-bold text-3xl"> Learn New Stuff</h2>
          <p className="mt-4">
            I'am Fajri, I always experiment with new things; it makes me
            curious. What happens if I create that? I also enjoy creating
            websites. I can easily grasp the concepts of websites using Tailwind
            CSS in just 2 months. It's truly surprising.
          </p>
          <p className="mt-4">
            My frontend development journey began with the fundamentals of HTML,
            CSS, and advanced to mastering JavaScript frameworks like React and
            Nuxt. Now, I'm actively exploring new frameworks and expanding my
            development skillset.
          </p>
        </div>
      </div>
    </div>
  );
}
