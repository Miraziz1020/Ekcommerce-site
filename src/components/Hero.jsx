import HeroPhone from "../assets/Hero-Phone.png";
import { FaApple } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mt-10">
      <div className="bg-black w-292.5 h-86 mx-33.75 flex">
        <div className="p-14.5">
          <div className="flex gap-6 items-center">
            <FaApple className="text-white text-5xl"/>
            <h6 className="font-normal text-[16px] text-[#FAFAFA]">iPhone 14 Series</h6>
          </div>
          <h2 className="text-[#FAFAFA] tracking-[4%] font-semibold leading-15 text-[48px] w-73.5">Up to 10% off Voucher</h2>
        </div>
        <img src={HeroPhone} alt="" />
      </div>
    </section>
  );
}
