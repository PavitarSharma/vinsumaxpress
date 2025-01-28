
import { useEffect } from "react";

const ThermoFormingTrays = () => {
  useEffect(() => {
    document.title = "Thermo Forming Trays";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Thermo Forming Trays</div>
        </div>
      </section>
    </>
  );
};

export default ThermoFormingTrays;


