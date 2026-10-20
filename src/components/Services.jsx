import Service1 from "../assets/Services1.png";
import Service2 from "../assets/Services2.png";
import Service3 from "../assets/Services3.png";
export default function Services() {

  return (
    <section className="mt-11.75 mb-35">
      <div className="flex ml-62.25 gap-22">
        <div className="text-center w-62.25 h-40.25 items-center">
          <img className="w-20 h-20 ml-auto mr-auto mb-6" src={Service1} alt="" />
          <div>
            <h4>FREE AND FAST DELIVERY</h4>
            <h5>Free delivery for all orders over $140</h5>
          </div>
        </div>
        <div className="text-center w-62.25 h-40.25 items-center">
          <img className="w-20 h-20 ml-auto mr-auto mb-6" src={Service2} alt="" />
          <div>
            <h4>24/7 CUSTOMER SERVICE</h4>
            <h5>Friendly 24/7 customer support</h5>
          </div>
        </div>
        <div className="text-center w-62.25 h-40.25 items-center">
          <img className="w-20 h-20 ml-auto mr-auto mb-6" src={Service3} alt="" />
          <div>
            <h4>MONEY BACK GUARANTEE</h4>
            <h5>We reurn money within 30 days</h5>
          </div>
        </div>
      </div>
    </section>
  );
}
