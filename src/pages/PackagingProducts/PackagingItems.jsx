
import { useEffect } from "react";
import { packagingPage } from "@/constants";
import CylinderCards from "../../components/CylinderCard";
const { foldableCrates } = packagingPage;

const PackagingItems = ({ key }) => {
  useEffect(() => {
    document.title = "PP Box";
  }, []);
  console.log(key)

  return (
    <>
      <section>
        <div className="container">
          <div className="text-3xl font-semibold">PP Box</div>
          {/* <figure
            className="border-2 border-foreground border-dashed rounded-lg w-[30%] h-48 bg-white mt-4"
          >
            <img
              src={foldableCrates.images[0]}
              alt="PP Box"
              className="w-full h-full object-contain"
            />
          </figure> */}

          <CylinderCards />
        </div>
      </section>
    </>
  );
};

export default PackagingItems;
