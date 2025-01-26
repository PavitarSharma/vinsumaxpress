import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
const ThreePlInventoryManagement = () => {
  useEffect(() => {
    document.title = ROUTES.THREEPL_INVENTORY_MANAGEMENT;
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>ThreePl Inventory management</div>
        </div>
      </section>
    </>
  );
};

export default ThreePlInventoryManagement;
