import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
const PackagingSolution = () => {
  useEffect(() => {
    document.title = ROUTES.PACKAGING_SOLUTION;
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Packaging Solution</div>
        </div>
      </section>
    </>
  );
};

export default PackagingSolution;
