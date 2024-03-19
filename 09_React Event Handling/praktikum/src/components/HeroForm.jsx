import Article from "./data"

export default function HeroForm(){

  function validateProductName(e){
    const value = e.target.value
    value.length > 10 && alert('Tidak boleh melebihi 10 karakter')
    value.length > 25 && alert('Last Name must not exceed 25 characters.')
    value.trim() == "" && alert('Please enter a valid product name.')
  }

    return(
        <>
        <style
            dangerouslySetInnerHTML={{
              __html:
                '\n        /* Menyembunyikan teks "Choose File" */\n        input[type="file"]::-webkit-file-upload-button {\n            background-color: #0D6EFD;\n        }\n        input[type="file"]::-webkit-file-upload-button:hover{\n            background-color: #0D6EFD;\n        }\n    '
            }}
          />
          <section className="flex justify-center flex-col items-center gap-4 mt-4 mx-44 py-8">
            <div className="flex justify-center flex-col items-center gap-4 mt-20">
              <svg
                data-tooltip-target="tooltip-default"
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
              <div
                id="tooltip-default"
                role="tooltip"
                className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
              >
                Bootstrap’s
                <div className="tooltip-arrow" data-popper-arrow="" />
              </div>
              <h1 className="text-3xl font-bold">{Article.title.en}</h1>
              <p className="text-center text-xl text-[#212529] font-light">
                 {Article.description.en}
              </p>
            </div>
            <form action="" className="form w-3/4 pt-10 px-10">
              <h2 className="font-medium text-2xl">Detail Product</h2>
              <div className="mt-8 grid grid-cols-6 row-auto gap-x-10 gap-y-8">
                <div className="first-name col-span-4">
                  <label className="text-base w-full flex flex-row" htmlFor="productName">
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="productName"
                    id="productName"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                    git=""
                    maxLength={25}
                    onChange={validateProductName}
                  />
                </div>
                <div className="nationality col-span-3">
                  <label className="w-full flex flex-row" htmlFor="productCategory">Product Category</label>
                  <select
                    id="productCategory"
                    name="productCategory"
                    autoComplete="country-name"
                    git=""
                    className="mt-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option value="">&nbsp;&nbsp;Choose...</option>
                    <option value="Indonesia">&nbsp;&nbsp;Indonesia</option>
                    <option value="Malaysia">&nbsp;&nbsp;Malaysia</option>
                    <option value="Bekasi">&nbsp;&nbsp;Bekasi</option>
                  </select>
                </div>
                <div className="col-span-4 ml-0">
                  <label className="w-full flex flex-row" htmlFor="image">Image of Product</label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    git=""
                    className="w-full file:bg-[#0D6EFD] file:text-white border-[#0D6EFD] text-[#0D6EFD] border mt-3 rounded"
                  />
                </div>
                <div className="gender col-span-6">
                  <label className="w-full flex flex-row" htmlFor="productFresh">Product Freshness</label>
                  <div className="mt-3 w-full flex flex-row">
                    <input
                      type="radio"
                      defaultValue="Brand New"
                      name="productFresh"
                      id="productFresh"
                    />
                    <label htmlFor="" className="ml-1">
                      Brand New
                    </label>
                  </div>
                  <div className="mt-1 w-full flex flex-row">
                    <input
                      type="radio"
                      defaultValue="Second Hand"
                      name="productFresh"
                      id="productFresh"
                    />
                    <label htmlFor="" className="ml-1 ">
                      Second Hand
                    </label>
                  </div>
                  <div className="mt-1 w-full flex flex-row">
                    <input
                      type="radio"
                      defaultValue="Refufbished"
                      name="productFresh"
                      id="productFresh"
                    />
                    <label htmlFor="" className="ml-1">
                      Refufbished
                    </label>
                  </div>
                </div>
                <div className="col-span-6">
                  <label className="w-full flex flex-row" htmlFor="additionalDesc">Additional Description</label>
                  <br />
                  <textarea
                    name="additionalDesc"
                    id="additionalDesc"
                    cols={30}
                    rows={4}
                    className="w-full mt-3 border-[#CED4DA] rounded"
                    defaultValue={""}
                  />
                </div>
                <div className="col-span-6">
                  <label className="w-full flex flex-row" htmlFor="productPrice">Product Price</label>
                  <input
                    type="number"
                    name="productPrice"
                    id="productPrice"
                    placeholder="$1"
                    className="w-full mt-3 border-[#CED4DA] rounded"
                  />
                </div>
                <input
                  defaultValue="submit"
                  onClick={validateProductName}
                  type="submit"
                  id="submit"
                  className="col-span-6 mt-4 mx-8 bg-blue-600 text-white text-xl py-2 rounded-md cursor-pointer"
                />
              </div>
            </form>
          </section>
          </>
    )
}