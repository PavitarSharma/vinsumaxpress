
import { useEffect } from "react";

const PPBox = () => {
  useEffect(() => {
    document.title = "PP Box";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>PP Box</div>
        </div>
      </section>
    </>
  );
};

export default PPBox;
