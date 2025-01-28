import { useEffect } from "react";

const MetalFoldableBin = () => {
  useEffect(() => {
    document.title = "Metal Foldable Bin";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Metal Foldable Bin</div>
        </div>
      </section>
    </>
  );
};

export default MetalFoldableBin;
