
import { useEffect } from "react";

const FlcFoldable = () => {
  useEffect(() => {
    document.title = "FLC Foldable";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Flc Foldable</div>
        </div>
      </section>
    </>
  );
};

export default FlcFoldable;
