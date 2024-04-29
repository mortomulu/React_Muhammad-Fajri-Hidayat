import { useLocation } from "react-router-dom";

export default function DetailProduct() {
  const { state } = useLocation();
  const data = state.data;
  const image = (data.image)? URL.createObjectURL(data.image) : data.imageMock
  console.log(state);
  return (
    <div className="m-4 flex flex-col align-center">
      <h1 className="text-center text-2xl font-bold mb-4">
        Details Product {data?.id}
      </h1>
      <table className="border-collapse text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 border border-gray-300">Type</th>
            <th className="py-2 px-4 border border-gray-300">Value</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300  ">Product Name</th>
            <td className="py-2 px-4 border border-gray-300">
              {data?.productName}
            </td>
          </tr>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300">
              Product Category
            </th>
            <td className="py-2 px-4 border border-gray-300">
              {data?.productCategory}
            </td>
          </tr>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300">
              Product Freshness
            </th>
            <td className="py-2 px-4 border border-gray-300">
              {data?.productFreshness}
            </td>
          </tr>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300">
              Product Description
            </th>
            <td className="py-2 px-4 border border-gray-300">{data?.desc}</td>
          </tr>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300">Product Price</th>
            <td className="py-2 px-4 border border-gray-300">
              {data?.productPrice}
            </td>
          </tr>
          <tr className="border border-gray-300">
            <th className="py-2 px-4 border border-gray-300">Product Image</th>
            <td className="py-2 px-4 border border-gray-300 flex justify-center">
              <img className="w-40" src={image} alt="image" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
