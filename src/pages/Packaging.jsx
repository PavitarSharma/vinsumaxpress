import { useEffect } from "react";

const Packaging = () => {
  useEffect(() => {
    document.title = "Packaging | Vinsum Axpress";
  }, []);
  
  return <div>Packaging</div>;
};

export default Packaging;
