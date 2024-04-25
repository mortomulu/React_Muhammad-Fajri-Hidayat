import { useLocation } from "react-router-dom";

export default function DetailProduct() {
  const {state} = useLocation()
  const data = state.data
    console.log(state);
    return (
      <div className="m-4">
        <h1>{data?.productName}</h1>
              <h1>{data?.productCategory}</h1>
              <h1>{data?.productFreshness}</h1>
              <h1>{data?.desc}</h1>
              <h1>{data?.productPrice}</h1>
        <h1>halo</h1>
      </div>
    );
  }