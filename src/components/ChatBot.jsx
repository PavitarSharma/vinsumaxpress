import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileUser } from "@/assets/images";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { visnumNetwork } from "@/constants";
import { useCallback, useState } from "react";
import axios from "axios";
import TrackShipment from "../pages/Home/sections/TrackShipment";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { homeServices } from "../constants";
import { LuX } from "react-icons/lu";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Please write your message",
  }),
});

const chatButtons = [
  "Our Network",
  "Docket/Invoice Search",
  "Service Provided",
  "Contact Us",
];

const CHAT_TYPE = {
  OUR_NETWORK: "Our Network",
  DOCKET_INVOICE_SEARCH: "Docket/Invoice Search",
  SERVICE_PROVIDED: "Service Provided",
  CONTACT_US: "Contact Us",
};

const ChatBot = () => {
  const [type, setType] = useState("");
  const [invoiceSearch, setInvoiceSearch] = useState("Invoice Search");
  const [loading, setLoading] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [openTrackShipment, setOpenTrackShipment] = useState(false);
  const [error, setError] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = async (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (invoiceSearch === "Invoice Search") {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://testwebsiteapi.vinsumaxpress.com/api/DocketTracking?docketno=${values.message}&isDocket=false`
        );
        setShipment(res.data);
        setOpenTrackShipment(true);
        form.resetForm();
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
      return;
    } else {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://testwebsiteapi.vinsumaxpress.com/api/DocketTracking?docketno=${values.message}&isDocket=true`
        );
        setShipment(res.data);
        setOpenTrackShipment(true);
        form.resetForm();
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }

      return;
    }
  };

  const handleChangeType = useCallback((chatType) => {
    setType(chatType);
  }, []);

  const handleInvoiceSearchChange = useCallback((invoice) => {
    setInvoiceSearch(invoice);
  }, []);

  const handleTrackShipmentClose = useCallback(() => {
    setOpenTrackShipment((prev) => !prev);
    setShipment(null);
  }, []);

  return (
    <div>
      <TrackShipment
        show={openTrackShipment}
        onClose={handleTrackShipmentClose}
        shipment={shipment}
      />
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"></header>
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="grid gap-4 overflow-y-auto max-h-[450px] no-scrollbar">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 shrink-0 rounded-none">
              <AvatarImage
                src="/logo.png"
                alt="profile-user"
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Vinsum Axpress</div>
                {/* <div className="text-xs text-muted-foreground">2:39 PM</div> */}
              </div>
              <div>
                <p>Hello, how can I assist you today?</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 justify-end">
            <div className="grid gap-1 rounded-lg bg-primary p-3 text-sm text-primary-foreground">
              <div className="flex items-center gap-2">
                <div className="font-medium">You</div>
                {/* <div className="text-xs text-primary-foreground/80">
                  2:40 PM
                </div> */}
              </div>
              <div>
                <p>Hi, I have a question about your product.</p>
              </div>
            </div>
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage
                src={profileUser}
                alt="profile-user"
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 shrink-0 rounded-none">
              <AvatarImage src="/logo.png" alt="profile-user" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Vinsum Axpress</div>
                {/* <div className="text-xs text-muted-foreground">2:41 PM</div> */}
              </div>
              <div>
                <p>Sure, how can I help you with that?</p>
              </div>
            </div>
          </div>

          {type && (
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={() => setType("")}
              className="ml-auto"
            >
              <LuX />
            </Button>
          )}

          {!type && (
            <div className="flex justify-end">
              <div className="flex flex-col gap-2 items-start">
                {chatButtons.map((button, index) => (
                  <Button
                    type="button"
                    key={index}
                    className="py-2 px-4 text-sm"
                    variant="outline"
                    size="small"
                    onClick={() => handleChangeType(button)}
                  >
                    {button}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {type === CHAT_TYPE.OUR_NETWORK && <OurNetwork />}
          {type === CHAT_TYPE.DOCKET_INVOICE_SEARCH && (
            <>
              <div className="grid grid-cols-2 gap-4">
                {["Invoice Search", "Docket Search"].map((invoice) => (
                  <Button
                    type="button"
                    key={invoice}
                    variant={
                      invoiceSearch === invoice ? "destructive" : "outline"
                    }
                    onClick={() => handleInvoiceSearchChange(invoice)}
                  >
                    {invoice}
                  </Button>
                ))}
              </div>
              <p className="text-sm">
                If you&#39;re looking for {"invoice"}, please let me know the
                details. I can help you find the relevant documents for you.
              </p>

              {error && (
                <p className="text-destructive text-center">
                  Failed to fetch shipment details
                </p>
              )}
            </>
          )}
        </div>

        {type === CHAT_TYPE.SERVICE_PROVIDED && <ServiceProvided />}

        {type === CHAT_TYPE.CONTACT_US && <ContactUs />}
      </div>
      {type === CHAT_TYPE.DOCKET_INVOICE_SEARCH && (
        <div className="sticky bottom-0 z-10 flex h-16 items-center gap-2 border-t bg-background px-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex items-center w-full gap-2"
          >
            <Input
              type="text"
              name="message"
              {...form.register("message")}
              placeholder="Type your message..."
              className="flex-1 rounded-lg bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button
              disabled={form.watch("message").length === 0 || loading}
              type="submit"
              size="icon"
            >
              <IoPaperPlaneOutline className="h-5 w-5" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

const OurNetwork = () => {
  return (
    <div className="space-y-2">
      {visnumNetwork.networks.map((overview, index) => (
        <div key={index} className="bg-cardBackground rounded border px-4 py-2">
          <h3 className="text-lg font-bold  text-primary">{overview.total}</h3>
          <p className="text-sm opacity-60 font-semibold">{overview.name}</p>
        </div>
      ))}
    </div>
  );
};

const ServiceProvided = () => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-4">
      {homeServices.map(({ title }, index) => (
        <div key={index} className="space-y-3 bg-zinc-100 p-2 rounded-lg">
          <h2 className="text-sm">{title}</h2>
        </div>
      ))}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="py-2 max-w-sm w-full">
      <a
        href="tel:1800-833-3513"
        className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
      >
        <FaPhoneAlt size={18} />
        1800-833-3513
      </a>
      <a
        href="mailto:care@vinsumaxpress.com"
        className="flex gap-2 items-center text-sm text-text my-4 hover:text-primary transition duration-300"
      >
        <MdMail size={18} />
        care@vinsumaxpress.com
      </a>

      <div
        href="mailto:care@vinsumaxpress.com"
        className="flex gap-2 text-sm text-text my-4 hover:text-primary transition duration-300"
      >
        <FaMapMarkedAlt size={18} />
        <span className="flex-1 text-sm">
          404- Electronic City, Udyog Vihar, Phase IV, Sector 18, Gurugram,
          122015.
        </span>
      </div>
    </div>
  );
};

export default ChatBot;
