import { CiPaperplane } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiTwitterLogoBold } from "react-icons/pi";
import QRcode from "../assets/QRcode.png";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/App store.png";

export default function Footer() {
  return (
    <footer className="bg-black h-110 text-white pt-20">
      <div className="flex justify-center gap-21.75 mx-33.75">
        <div className="mb-6 font-bold text-[24px]">
          <h5 className="mb-6 font-bold text-[24px] ">Exclusive</h5>
          <h6 className="mb-6 font-medium text-[20px]">Subscribe</h6>
          <h6 className="mb-6 text-[16px] font-normal">
            Get 10% off your first order
          </h6>
          <form className="flex w-54.25 h-12 items-center justify-between rounded-sm border-[1.5px] border-white bg-black px-4 py-3 gap-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent text-white placeholder-neutral-500 outline-none text-sm"
            />
            <button
              type="submit"
              className="flex items-center justify-center shrink-0"
            >
              <CiPaperplane className="text-white hover:text-neutral-300 text-[24px]" />
            </button>
          </form>
          
        </div>
        <div className="mb-6 font-bold text-[24px]">
          <h5 className="mb-6 font-bold text-[24px] ">Support</h5>
          <h6 className="mb-6 text-[16px] font-normal">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h6>
          <h6 className="mb-6 text-[16px] font-normal">exclusive@gmail.com</h6>
          <h6 className=" text-[16px] font-normal">+88015-88888-9999</h6>
        </div>
        <div className="mb-6 font-bold text-[24px]">
          <h5 className="mb-6 font-bold text-[24px] ">Account</h5>
          <h6 className="mb-6 text-[16px] font-normal">My Account</h6>
          <h6 className="mb-6 text-[16px] font-normal">Login / Register</h6>
          <h6 className="mb-6 text-[16px] font-normal">Cart</h6>
          <h6 className="mb-6 text-[16px] font-normal">Wishlist</h6>
          <h6 className=" text-[16px] font-normal">Shop</h6>
        </div>
        <div className="mb-6 font-bold text-[24px]">
          <h5 className="mb-6 font-bold text-[24px]">Quick Link</h5>
          <h6 className="mb-6 text-[16px] font-normal">Privacy Policy</h6>
          <h6 className="mb-6 text-[16px] font-normal">Terms Of Use</h6>
          <h6 className="mb-6 text-[16px] font-normal">FAQ</h6>
          <h6 className="text-[16px] font-normal">Contact</h6>
        </div>
        <div className="mb-6 font-bold text-[24px]">
          <div>
            <h5 className="mb-6 font-bold text-[24px]">Download App</h5>
            <div>
              <p className="text-[#FAFAFA] font-medium text-[12px] mt-6">
                Save $3 with App New User Only
              </p>
              <div className="flex mb-6 mt-2">
                <img src={QRcode} alt="" />
                <div className="ml-2 ">
                  <img className="mb-2.5" src={GooglePlay} alt="" />
                  <img src={AppStore} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6">
            <FaFacebookF />
            <PiTwitterLogoBold />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </footer>
  );
}
