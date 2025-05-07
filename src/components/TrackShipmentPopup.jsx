import { Dialog, DialogContent } from "@/components/ui/dialog";
import { shipmentProgress, shipmentTruck } from "../assets/images";
import { useRef, useEffect, useLayoutEffect } from "react";
import { truckAnimation, roadTrack} from "@/assets/images";

const TrackShipmentPopup = ({ onClose, show, shipment }) => {
  const status = shipment?.docketInfo[0]["Status"];

  //if (!shipment) return null;

  const truckRef = useRef(null);
  
  const truckMoment = (currentDestination) => {
    const stopPositions = [
      "22%",  // Stop 1
      "42%",  // Stop 2
      "62%",  // Stop 3
      "82%",  // Stop 4
    ];

    console.log("truckMoment :: currentDestination :: " + currentDestination)

    let step = 0;
    const truck = truckRef.current;

    const moveTruck = () => {
      if (step >= currentDestination) return;

      if (truck) {
        truck.classList.remove("truck-idle");
        truck.style.transition = "left 2.95s cubic-bezier(0.42, 0, 0.58, 1)";
        truck.style.left = stopPositions[step];
      }

      setTimeout(() => {
        if (truck) {
          truck.style.transition = "none";
          truck.classList.add("truck-idle");
        }

      setTimeout(() => {
        step++;
        moveTruck();}, 0); // 800ms stop time
      }, 2950); // 2.95s travel time
    };

    moveTruck();
  };

  const timeoutRef = useRef(null);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (show && !hasRunRef.current) {
      timeoutRef.current = setTimeout(() => {
        if(show) {
          if (status === "At Rest") truckMoment(1);
          if (status === "Intransit") truckMoment(2);
          if (status === "Out for Delivery") truckMoment(3);
          if (status === "Delivered") truckMoment(4);
        }
        hasRunRef.current = true;
      }, 500);
    }

    if (!show) {
      clearTimeout(timeoutRef.current); // Cancel if dialog closes early
      hasRunRef.current = false; // Reset for next time
    }

    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, [show]);


  return (
    <Dialog open={show} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[500px]  overflow-y-auto no-scrollbar">
        <div className="flex items-center justify-between w-full mt-6">
          <h1 className="text-lg font-bold">Shipment Status</h1>
          {/* <div
            className={`${
              status === "Delivered" ? "bg-green-600" : "bg-[#ED7014]"
            } text-white px-2 py-2 rounded-full text-xs font-medium`}
          >
            {status}
          </div> */}
        </div>

         <div className="relative w-full h-full">

            <div className="relative w-full h-2">
              {/* At Rest - Gray */}
              <div className={`absolute left-[27%] px-3 py-1 text-white rounded transition-all duration-300
                ${status === "At Rest" ? "bg-primary scale-110" : "bg-gray-600"}
              `}>
                At Rest
              </div>

              {/* In Transit - Dark Yellow (Amber) */}
              <div className={`absolute left-[46%] px-3 py-1 text-white rounded transition-all duration-300
                ${status === "Intransit" ? "bg-primary scale-110" : "bg-gray-600"}
              `}>
                In-Transit
              </div>

              {/* Out for Delivery - Orange */}
              <div className={`absolute left-[63%] px-3 py-1 text-white rounded transition-all duration-300
                ${status === "Out for Delivery" ? "bg-primary scale-110" : "bg-gray-600"}
              `}>
                Out for Delivery
              </div>

              {/* Delivered - Green */}
              <div className={`absolute left-[85%] px-3 py-1 text-white rounded transition-all duration-300
                ${status === "Delivered" ? "bg-green-600 scale-110" : "bg-gray-600"}
              `}>
                Delivered
              </div>
            </div>

            <img
              src={roadTrack}
              alt="road"
              className="h-fit w-full object-cover"
            />

            <img
              src={truckAnimation}
              alt="truck"
              ref={truckRef}
              style={{ transition: "left 0.5s linear", left: -16 }}
              className="absolute bottom-2 h-20 w-[160px]"
            />
          </div>
        <div className="my-4 space-y-2 text-sm">
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium opacity-70">Dispatch Date:</span>
            <span className="font-medium">
              {shipment?.docketInfo[0]
                ? shipment?.docketInfo[0]["Booking Date"]
                : ""}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium opacity-70">Source Point:</span>
            <span className="font-medium">
              {shipment?.docketInfo[0]
                ? shipment?.docketInfo[0]["C/nor City"]
                : ""}
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <span className="font-medium opacity-70">Destination Point:</span>
            <span className="font-medium">
              {shipment?.docketInfo[0]
                ? shipment?.docketInfo[0]["C/nee City"]
                : ""}
            </span>
          </div>
        </div>

        <div className="py-2">
          <div className="flex items-center gap-2">
            <img
              src={shipmentProgress}
              alt="shipment-progress"
              className="w-8"
            />
            <h1 className="text-lg font-bold">Shipment Progress</h1>
          </div>

          <div className="relative overflow-x-auto my-4 md:w-[850px]">
            <table className="w-full text-left border border-t-0 rounded-md">
              <thead className="bg-neutral-200 text-sm rounded">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Docket No.
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                    Booking Date
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    C/Nor City
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Bkg Brn
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    C/Nee City
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Del Brn
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    No. Of PKG
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Curr/Last Loc
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {shipment?.docketInfo?.map((info, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {info["Docket No"]}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">
                      {info["Booking Date"]}
                    </td>
                    <td className="px-6 py-4">{info["C/nor City"]}</td>
                    <td className="px-6 py-4">{info["Bkg Brn"]}</td>
                    <td className="px-6 py-4">{info["C/nee City"]}</td>
                    <td className="px-6 py-4">{info["Del Brn"]}</td>
                    <td className="px-6 py-4 text-center">
                      {info["No. of PKG"]}
                    </td>
                    <td className="px-6 py-4 text-center text-primary">
                      {info["Curr/Last Loc"]}
                    </td>
                    <td className="px-6 py-4">{info["Status"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="relative overflow-x-auto">
            <table className="w-[850px] text-left border border-t-0 rounded-md">
              <thead className="bg-neutral-200 text-sm rounded">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Invoice No
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                    Invoice Date
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Consignor Part No.
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Consignee Part No.
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Quantity
                  </th>
                </tr>
              </thead>
              <tbody>
                {shipment?.invoiceDetails?.map((invoice, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{invoice["Invoice No."]}</td>
                    <td className="px-6 py-4">{invoice["Date"]}</td>
                    <td className="px-6 py-4">
                      {typeof invoice["Consignor Part No."] === "string"
                        ? invoice["Consignor Part No."]
                        : null}
                    </td>
                    <td className="px-6 py-4">
                      {invoice["Consignee Part No."]}
                    </td>
                    <td className="px-6 py-4">{invoice["Quantity"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <img src={shipmentTruck} alt="shipment-truck" className="w-12" />
            <h1 className="text-lg font-bold">Additional Info</h1>
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-[850px] text-left border border-t-0 rounded-md">
              <thead className="bg-neutral-200 text-sm rounded">
                <tr>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Dispatch Date
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap ">
                    From
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    To
                  </th>
                  <th scope="col" className="px-6 py-3 whitespace-nowrap">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {shipment?.challanDetails?.map((info, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4">{info["Dispatch Date"]}</td>
                    <td className="px-6 py-4">{info["From"]}</td>
                    <td className="px-6 py-4">{info["To"]}</td>
                    <td className="px-6 py-4">{info["Status"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrackShipmentPopup;
