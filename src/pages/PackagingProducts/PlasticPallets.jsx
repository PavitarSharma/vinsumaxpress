
import { useEffect } from "react";

const PlasticPallets = () => {
  useEffect(() => {
    document.title ="Plastic Pallets";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Plastic Pallets</div>
        </div>
      </section>
    </>
  );
};

export default PlasticPallets;
