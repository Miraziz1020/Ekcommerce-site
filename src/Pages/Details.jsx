import { useParams } from "react-router-dom";
import { getProduct } from "../api/productsApi";
import { useEffect, useState } from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { MdCircle } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineArrowPath } from "react-icons/hi2";

export default function Details() {
  const { id } = useParams({});
  const [data, setData] = useState({});

  useEffect(() => {
    async function loadProducts() {
      try {
        const Product = await getProduct(id);
        setData(Product);
        console.log(Product);
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xato:", error);
      }
    }
    loadProducts();
  }, [id]);

  const [state, setState] = useState(1);
  const [modal, setModal] = useState(false);

  return (
    <section className="container mx-auto px-4 mt-20 mb-23.5">
      <div className="mb-20">
        <h1>Account / Gaming / {data?.title}</h1>
      </div>
      <div className="flex gap-17.5">
        <div className="flex w-[48%]">
          <div className="flex flex-col gap-4 mr-7.5">
            <div className="w-42.5 h-34.5 bg-[#F5F5F5] rounded-sm"></div>
            <div className="w-42.5 h-34.5 bg-[#F5F5F5] rounded-sm"></div>
            <div className="w-42.5 h-34.5 bg-[#F5F5F5] rounded-sm"></div>
            <div className="w-42.5 h-34.5 bg-[#F5F5F5] rounded-sm"></div>
          </div>
          <img className="w-125 h-150 rounded-sm" src={data?.img} alt="" />
        </div>
        <div className="w-[38%] ml-auto">
          <div className="gap-4 flex flex-col">
            <h3 className="font-semibold text-2xl leading-6 tracking-[3%] text-black">
              {data?.title}
            </h3>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2 items-center">
                {data?.rating}
                <FaStar className="text-[20px] text-yellow-400" />
              </div>
              <p className="font-normal text-[14px] opacity-50 leading-5.25">
                (150+ Reviews)
              </p>
              <div className="h-4 w-px bg-black" />
              <p
                className={`${data.isStock ? "text-[#00FF66] cursor-default" : "text-[#DF0404] cursor-default"}`}
              >
                {data.isStock ? "In Stock" : "No Stock"}
              </p>
            </div>
            <h3 className="font-normal text-2xl tracking-[3%] leading-6 text-black">
              ${data?.price}.00
            </h3>
            <p className="w-93.25 font-normal text-sm leading-5.25">
              {data?.desc}
            </p>
          </div>
          <hr className="w-100 my-6" />
          <div className="flex flex-col gap-6">
            <p className="flex items-center text-black tracking-[3%] leading-5">
              <span className="cursor-default">Colours:</span>
              <MdCircle className="text-gray-900 text-[20px] ml-6 mr-2 cursor-pointer" />
              <MdCircle className="text-[20px] text-gray-100 cursor-pointer" />
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex items-center">
                <p className="mr-6 cursor-default">Size: </p>
                <div className="flex gap-4 ">
                  <div className="rounded-sm border-[#00000080] border w-8 h-8 items-center text-center pt-1.75 cursor-pointer hover:bg-gray-100">
                    XS
                  </div>
                  <div className="rounded-sm border-[#00000080] border w-8 h-8 items-center text-center pt-1.75 cursor-pointer hover:bg-gray-100">
                    S
                  </div>
                  <div className="rounded-sm border-[#00000080] border w-8 h-8 items-center text-center pt-1.75 cursor-pointer hover:bg-gray-100">
                    M
                  </div>
                  <div className="rounded-sm border-[#00000080] border w-8 h-8 items-center text-center pt-1.75 cursor-pointer hover:bg-gray-100">
                    L
                  </div>
                  <div className="rounded-sm border-[#00000080] border w-8 h-8 items-center text-center pt-1.75 cursor-pointer hover:bg-gray-100">
                  
                    XL
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-39.75 h-11 flex items-center">
                  <button
                    onClick={() => setState((prev) => prev - 1)}
                    className="text-center w-10 border h-11 rounded-l-sm border-[#00000080] text-2xl cursor-pointer"
                  >
                    -
                  </button>
                  <div className="text-center content-center  w-20 border-y h-11 border-[#00000080] text-2xl">
                    {state}
                  </div>
                  <button
                    onClick={() => setState((prev) => prev + 1)}
                    className="text-center w-10 border h-11 rounded-r-sm border-[#DB4444] bg-[#DB4444] text-white text-2xl cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => setModal(true)}
                  className="w-41.25 h-11 bg-[#DB4444] hover:bg-[#c33232] rounded text-white cursor-pointer"
                >
                  Buy Now
                </button>
                {modal && (
                  <div
                    onClick={() => setModal(false)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
                  >
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="w-full max-w-sm scale-100 transform rounded-2xl bg-white p-6 text-center shadow-2xl transition-all duration-300"
                    >
                      <h2 className="mb-2 text-2xl font-bold text-red-600">
                        Something went wrong :&#40;
                      </h2>

                      <p className="mb-6 text-sm leading-relaxed text-gray-500">
                        An unexpected error occurred. Please check your
                        connection and try again.
                      </p>

                      <button
                        onClick={() => setModal(false)}
                        className="w-full rounded-xl bg-red-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-700 active:bg-red-800"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
                <div className="border-[#00000080] border text-center items-center w-10 h-10 p-2.5 rounded hover:bg-gray-100">
                  <FaRegHeart className="text-[20px cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-99.75 h-45 rounded-sm border border-[#00000080] mt-10 flex flex-col cursor-default">
            <div>
              <div className="flex mt-6 ml-4 mr-12.75 items-center gap-4 mb-4">
                <TbTruckDelivery className="text-[40px]"/>
                <div>
                  <h4 className="mb-2 font-medium text-base leading-6 text-black">Free Delivery</h4>
                  <p className="text-xs leading-4.5 font-medium underline text-black">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <div className="flex mb-6 mt-4 ml-4 mr-25.5 items-center gap-4">
                <HiOutlineArrowPath className="text-[40px]"/>
                <div>
                  <h4 className="mb-2 font-medium text-base leading-6 text-black">Return Delivery</h4>
                  <p className="text-xs leading-4.5 font-medium text-black">Free 30 Days Delivery Returns. <span className="underline">Details</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
