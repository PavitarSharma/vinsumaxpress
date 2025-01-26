import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
const FourPlInplantLogistics = () => {
  useEffect(() => {
    document.title = ROUTES.FOURPL_INPLANT_LOGISTICS_PROJECT_MANAGEMENT;
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>FourPl Inplant Logistics</div>
        </div>
      </section>
    </>
  );
};

export default FourPlInplantLogistics;
