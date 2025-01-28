import { useEffect } from "react";

const Pallets = () => {
  useEffect(() => {
    document.title = "Pallets";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Pallets</div>
        </div>
      </section>
    </>
  );
};

export default Pallets;
