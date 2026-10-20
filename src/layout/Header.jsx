import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex bg-[#000000] h-12 w-100% ">
        <div className="flex items-center gap-2 ml-111.25">
          <h4 className="text-[#FAFAFA] font-normal text-sm leading-[21%] text-nowrap cursor-default">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </h4>
          <a className="font-semibold text-[#FAFAFA] leading-6 cursor-pointer">
            ShopNow
          </a>
        </div>
        <div className="flex gap-1.25 items-center ml-57.75 cursor-pointer">
          <h4 className="font-normal text-sm leading-5.25 text-[#FAFAFA] cursor-pointer">
            English
          </h4>
          <MdOutlineKeyboardArrowDown className="text-white w-52 cursor-pointer" />
        </div>
      </nav>
      <nav>
        <div className="flex mx-33.75 mt-10 mb-4 gap-37 items-center">
          <div className="flex gap-47.5">
            <h3 className="font-bold text-2xl leading-6 tracking-[3%] cursor-pointer">
              Exclusive
            </h3>
            <ul className="flex gap-12 items-center">
              <li className="font-normal text-[16px] leading-6 cursor-pointer">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="font-normal text-[16px] leading-6 cursor-pointer">
                Contact
              </li>
              <li className="font-normal text-[16px] leading-6 cursor-pointer">
                About
              </li>
              <li className="font-normal text-[16px] leading-6 cursor-pointer">
                Sign in
              </li>
            </ul>
          </div>
          <div className="flex gap-6">
            <form className="flex w-60.75 bg-[#F5F5F5] items-center cursor-pointer">
              <input
                className="bg-[#F5F5F5] w-[80%] h-9.5 rounded-sm p-5 font-normal text-[16px] text-black leading-3 outline-none cursor-pointer"
                type="text"
                placeholder="What are you looking for?"
              />
              <button className="w-[20%] cursor-pointer">
                <IoIosSearch className="text-[24px] cursor-pointer" />
              </button>
            </form>
            <div className="flex w-20 h-8 items-center p-2 gap-4">
              <FaRegHeart className="text-[26px] cursor-pointer" />
              <BsCart3 className="text-[26px] cursor-pointer" />
            </div>
          </div>
        </div>
      </nav>
      <hr />
    </header>
  );
}
