import { useEffect } from "react";
import { ROUTES } from "@/lib/routes";
const MultiModalTransportation = () => {
  useEffect(() => {
    document.title = ROUTES.MultiModalTransportation;
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>MultiModalTransportation</div>
        </div>
      </section>
    </>
  );
};

export default MultiModalTransportation;
