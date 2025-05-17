import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MdKeyboardBackspace } from "react-icons/md";

const NotFound = () => {
  useEffect(() => {
    document.title = "404 Not Found";
  }, []);
  
  return (
    <section className="section">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-9xl font-semibold text-orange-600 drop-shadow-2xl">
              404
            </h1>
            <p className="text-center text-3xl font-bold text-zinc-700">
              Not Found
            </p>
          </div>

          <div className="mt-6 flex flex-col items-center justify-center">
            <p className="text-lg text-zinc-700 font-medium">
              Sorry, we were unable to find that page
            </p>
            <p>Please use main menu or choose from below button</p>

            <Link to="/">
              <Button className="mt-4">
                <MdKeyboardBackspace />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
