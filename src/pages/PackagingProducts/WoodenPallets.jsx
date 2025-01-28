
import { useEffect } from "react";

const WoodenPallets = () => {
  useEffect(() => {
    document.title = "Wooden Pallets";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Wooden Pallets</div>
        </div>
      </section>
    </>
  );
};

export default WoodenPallets;
