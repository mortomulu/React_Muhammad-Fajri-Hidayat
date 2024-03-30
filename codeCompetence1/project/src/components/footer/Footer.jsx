import Brand from "./Brand";
import SocialMedia from "./SocialMedia";
import NoAdress from "./NoAdress";

export default function Footer() {
  return (
    <div className="border-y    px-16 py-8 grid grid-cols-3 gap-5">
      <div className=" ">
        <Brand />
      </div>
      <div className=" ">
        <SocialMedia />
      </div>
      <div className=" ">
        <NoAdress />
      </div>
    </div>
  );
}
