import { useEffect } from "react";

const WarehouseSolution = () => {
  useEffect(() => {
    document.title = "Warehouse Solution";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Warehouse Solution</div>
        </div>
      </section>
    </>
  );
};

export default WarehouseSolution;
