import { useEffect } from "react";

const MultiModalTransportation = () => {
  useEffect(() => {
    document.title = "Multi Modal Transportation";
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
