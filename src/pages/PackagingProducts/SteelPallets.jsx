import { useEffect } from "react";

const SteelPallets = () => {
  useEffect(() => {
    document.title = "Steel Pallets";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Steel Pallets</div>
        </div>
      </section>
    </>
  );
};

export default SteelPallets;
