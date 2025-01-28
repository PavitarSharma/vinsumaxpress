
import { useEffect } from "react";

const WireMeshContainer = () => {
  useEffect(() => {
    document.title = "Wire Mesh Container";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Wire Mesh Container</div>
        </div>
      </section>
    </>
  );
};

export default WireMeshContainer;
