
import { useEffect } from "react";

const CustomizeWoodenPackagingBox = () => {
  useEffect(() => {
    document.title = "CustomizeWooden Packaging Box";
  }, []);

  return (
    <>
      <section>
        <div className="container">
          <div>Customize Wooden Packaging Box</div>
        </div>
      </section>
    </>
  );
};

export default CustomizeWoodenPackagingBox;
