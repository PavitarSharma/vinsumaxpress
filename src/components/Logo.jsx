import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-1 cursor-pointer">
      <img src="/logo.png" alt="logo" className="w-9" />
      <h1 className="text-3xl font-bold">
        <span className="text-primary">VIN</span>
        <span>SUM</span>
      </h1>
    </Link>
  );
};

export default Logo;
