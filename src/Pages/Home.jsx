import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { getProducts } from "../api/productsApi";
import Services from "../components/services";
import Products from "../components/Products";

export default function Home() {

  const [data, setData] = useState([])
  const [limit, setLimit] = useState(8)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        const products = await getProducts(limit);
        setData(products);
      } catch (error) {
        console.error("Mahsulotlarni yuklashda xato:", error);
      }
      finally{
        setLoading(false)
      }
    }
    loadProducts();
  }, [limit]);

  return (
    <>
      <Hero />
      <Services />
      <Products loading={loading} setLimit={setLimit} products={data}/> 
    </>
  );
}
