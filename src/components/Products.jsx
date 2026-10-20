import { NavLink } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import { FaStar } from "react-icons/fa";

export default function Products({ products, setLimit, loading }) {
  function renderProducts(products) {
    return products?.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }

  return (
    <section className="p-4 mx-20 gap-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{renderProducts(products)}</div>
      <div className="flex justify-center w-full">
        <LoadingButton
          className="flex self-center"
          isLoading={loading}
          onClick={() => setLimit((prev) => prev + 8)}
        >
          View more
        </LoadingButton>
      </div>
    </section>
  );
}


function ProductItem({ product }) {
  return (
    <NavLink
      to={`/details/${product.id}`}
      className="w-67.5 h-80.5 flex flex-col gap-4 bg-white p-3 font-sans border border-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-24"
    >
      <div className="w-full h-50 bg-[#F5F5F5] rounded flex items-center justify-center p-4">
        <img src={product.img} alt={product.title} />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>

        <div className="flex items-center gap-2 mt-1">
          <p className="text-sm font-bold text-[#E53E3E]">${product.price}</p>
          <p className="text-xs flex items-center text-gray-500">({product.rating})<FaStar className="text-yellow-400 text-[20px]"/></p>
        </div>
      </div>
    </NavLink>
  );
}
