import { useEffect } from "react";

const PlsFoldable = () => {
  useEffect(() => {
    document.title = "Pls Foldable";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Pls Foldable</div>
        </div>
      </section>
    </>
  );
};

export default PlsFoldable;
