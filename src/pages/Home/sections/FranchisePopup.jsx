import { franchise } from "@/assets/images";
import { memo } from "react";
import { twentyThreeYearsSvg } from "@/assets/images";

const Franchise = () => {
  return (
    <div className="grid md:grid-cols-[60%_40%] text-center">
      <figure className="h-full">
        <img
          src={franchise}
          alt="franchise"
          className="h-full w-full rounded-xl"
        />
      </figure>
      <figure className="h-full md:block hidden content-center">
        <img
          src={twentyThreeYearsSvg}
          alt="franchise"
          className="w-[70%] h-[60%] mx-auto"
        />
      </figure>
    </div>
  );
};

const FranchisePopup = memo(Franchise);
export default FranchisePopup;
