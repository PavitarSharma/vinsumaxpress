import { useEffect } from "react";

const FoldableCratesBin = () => {
  useEffect(() => {
    document.title = "Foldable Crates Bin";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Foldable Crates Bin</div>
        </div>
      </section>
    </>
  );
};

export default FoldableCratesBin;
