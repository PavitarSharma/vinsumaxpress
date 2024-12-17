import { Separator } from "@/components/ui/separator";
import { packagingPage } from "@/constants";
import { useEffect } from "react";

const Packaging = () => {
  useEffect(() => {
    document.title = "Packaging | Vinsum Axpress";
  }, []);

  const {
    ppBox,
    foldableCrates,
    plsBoxes,
    wireMeshContainer,
    metalFoldableCrates,
    pallets,
    thermoFormingTray,
  } = packagingPage;

  return (
    <>
      <section className="py-8">
        <div className="container grid lg:grid-cols-2 lg:gap-28 items-start gap-6">
          {/* PP Box */}
          <ColumnReusableContainer
            title={ppBox.title}
            benefits={ppBox.benefits}
            images={ppBox.images}
          />

          {/* Foldable Crates */}
          <ColumnReusableContainer
            title={foldableCrates.title}
            benefits={foldableCrates.benefits}
            images={foldableCrates.images}
            layout="column-reverse"
            titleAlignment="end"
          />
        </div>
      </section>

      <Separator className="my-8" />

      <section className="py-8">
        <div className="container space-y-12">
          {/* Pls Boxes */}
          <RowReusableContainer
            title={plsBoxes.title}
            benefits={plsBoxes.benefits}
            images={plsBoxes.images}
          />

          {/* Wire Mesh */}
          <RowReusableContainer
            title={wireMeshContainer.title}
            benefits={wireMeshContainer.benefits}
            images={wireMeshContainer.images}
            layout="row-reverse"
            titleAlignment="end"
          />
        </div>
      </section>

      <Separator className="my-8" />

      <section className="py-8">
        <div className="container space-y-12">
          {/* Metal Foldable Crates */}
          <RowReusableContainer
            title={metalFoldableCrates.title}
            benefits={metalFoldableCrates.benefits}
            images={metalFoldableCrates.images}
          />

          {/* Pallets */}
          <RowReusableContainer
            title={pallets.title}
            benefits={pallets.benefits}
            images={pallets.images}
            layout="row-reverse"
            titleAlignment="end"
          />

          {/* Thermo Forming Tray */}
          <RowReusableContainer
            title={thermoFormingTray.title}
            benefits={thermoFormingTray.benefits}
            images={thermoFormingTray.images}
          />
        </div>
      </section>
    </>
  );
};

const ColumnReusableContainer = ({
  title,
  benefits,
  images,
  layout = "column", // "column" or "column-reverse"
  titleAlignment = "start", // "start" or "end"
}) => {
  return (
    <div
      className={`flex ${
        layout === "column-reverse"
          ? "lg:flex-col flex-col-reverse"
          : "flex-col-reverse"
      } gap-6`}
    >
      {/* Images */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <figure
            key={index}
            className="border-2 border-foreground border-dashed rounded-lg w-full h-36"
          ></figure>
        ))}
      </div>

      {/* Benefits */}
      <div className="space-y-4">
        <div
          className={`w-fit ${
            titleAlignment === "end" ? "ml-auto" : ""
          } bg-primary text-primary-foreground font-bold text-xl px-6 py-2 uppercase ${
            titleAlignment === "end" ? "rounded-tl-xl" : "rounded-tr-xl"
          }`}
        >
          {title}
        </div>

        <div>
          <h3 className="text-primary text-lg font-semibold mb-2">Benefits</h3>
          <ul className="list-disc pl-6">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const RowReusableContainer = ({
  title,
  benefits,
  images,
  layout = "row", // "column" or "column-reverse"
  titleAlignment = "start", // "start" or "end"
}) => {
  return (
    <div className={`grid lg:grid-cols-2 lg:gap-48 gap-8`}>
      {/* Images */}
      <div
        className={`grid grid-cols-2 gap-4 ${
          layout === "row" ? "order-2" : "lg:order-1 order-2"
        }`}
      >
        {images.map((image, index) => (
          <figure
            key={index}
            className="border-2 border-foreground border-dashed rounded-lg w-full h-36"
          ></figure>
        ))}
      </div>

      {/* Benefits */}
      <div
        className={`space-y-4 ${
          layout === "row" ? "order-1" : "lg:order-2 order-1"
        }`}
      >
        <div
          className={`w-fit ${
            titleAlignment === "end" ? "ml-auto" : ""
          } bg-primary text-primary-foreground font-bold text-xl px-6 py-2 uppercase ${
            titleAlignment === "end" ? "rounded-tl-xl" : "rounded-tr-xl"
          }`}
        >
          {title}
        </div>

        <div>
          <h3 className="text-primary text-lg font-semibold mb-2">Benefits</h3>
          <ul className="list-disc pl-6 ">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packaging;
