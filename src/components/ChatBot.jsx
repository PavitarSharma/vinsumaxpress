import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileUser } from "@/assets/images";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { visnumNetwork } from "@/constants";
import { useCallback, useEffect, useState } from "react";
import TrackShipment from "../pages/Home/sections/TrackShipment";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { homeServices } from "../constants";
import { LuX } from "react-icons/lu";
import useShipmentApi from "../hooks/useShipmentApi";

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
  "Our Network": "Our Network",
  "Docket/Invoice Search": "Docket/Invoice Search",
  "Service Provided": "Service Provided",
  "Contact Us": "Contact Us",
};

const ChatBot = () => {
  const [chat, setChat] = useState({
    type: "",
    isLoading: false,
  });
  const [loading, setLoading] = useState(false);
  const [shipment, setShipment] = useState(null);
  const [openTrackShipment, setOpenTrackShipment] = useState(false);
  const [error, setError] = useState(null);

  const [invoiceSearch, setInvoiceSearch] = useState("Invoice Search");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });
  const { fetchShipment } = useShipmentApi();

  const onSubmit = async (values) => {
    const element = document.querySelector("#chatMessage");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    const isDocketSearch = invoiceSearch === "Docket Search";
    setLoading(true);
    await fetchShipment({
      message: values.message,
      isDocketSearch,
      onSuccess: (data) => {
        setShipment(data);
        setOpenTrackShipment(true);
        form.reset();
      },
      onError: () => setError(true),
      onLoading: setLoading,
    });
  };

  useEffect(() => {
    if (chat.isLoading) {
      const element = document.getElementById("chatMessage");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [chat.isLoading]);

  const handleInvoiceSearchChange = useCallback((invoice) => {
    setInvoiceSearch(invoice);
  }, []);

  const handleChatChange = (chatType) => {
    setChat({ isLoading: true });
    setTimeout(() => {
      setChat({ type: CHAT_TYPE[chatType], isLoading: false });
    }, 2000);
  };

  const handleTrackShipmentClose = useCallback(() => {
    setOpenTrackShipment((prev) => !prev);
    setShipment(null);
    setError(null)
  }, []);

  const CHAT_MESSAGE = {
    "Our Network": <OurNetwork />,
    "Service Provided": <ServiceProvided />,
    "Contact Us": <ContactUs />,
  };

  const handleClose = useCallback(() => {
    setOpenTrackShipment(false);
    setShipment(null);
    setError(null);
    setChat({ type: "", isLoading: false });
    form.reset()
  }, [form]);

  return (
    <div>
      <TrackShipment
        show={openTrackShipment}
        onClose={handleTrackShipmentClose}
        shipment={shipment}
      />
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

          {chat.type && (
            <Button
              type="button"
              size="icon"
              variant="outline"
              onClick={handleClose}
              className="ml-auto"
            >
              <LuX />
            </Button>
          )}

          {!CHAT_TYPE[chat.type] && (
            <div className="flex justify-end">
              <div className="flex flex-col gap-2 items-start">
                {chatButtons.map((chatType, index) => (
                  <Button
                    type="button"
                    key={index}
                    className="py-2 px-4 text-sm"
                    variant="outline"
                    size="small"
                    onClick={() => handleChatChange(chatType)}
                  >
                    {chatType}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {CHAT_TYPE[chat.type] && <div>{CHAT_MESSAGE[chat.type]}</div>}

          {chat.type === CHAT_TYPE["Docket/Invoice Search"] && (
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
              <p className="text-xs">
                If you&#39;re looking for {"invoice"}, please let me know the
                details. I can help you find the relevant documents for you.
              </p>

              {loading && (
                <div id="inviceSearch" className="flex items-center gap-1">
                  <div className="loader"></div>
                  <p className="text-[10px] opacity-60 font-medium">
                    Vinsum is typing
                  </p>
                </div>
              )}

              {error && (
                <p id="chatMessage" className="text-destructive text-center">
                  Failed to fetch shipment details
                </p>
              )}
            </>
          )}

          {chat.type !== "Docket/Invoice Search" && chat.isLoading  && (
            <div id="chatMessage" className="flex items-center gap-1">
              <div className="loader"></div>
              <p className="text-[10px] opacity-60 font-medium">
                Vinsum is typing
              </p>
            </div>
          )}

          {chat.type === "Docket/Invoice Search" && loading &&  (
            <div id="chatMessage" className="flex items-center gap-1">
              <div className="loader"></div>
              <p className="text-[10px] opacity-60 font-medium">
                Vinsum is typing
              </p>
            </div>
          )}
        </div>
      </div>
      {chat.type === CHAT_TYPE["Docket/Invoice Search"] && (
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
