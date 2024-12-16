import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { profileUser } from "@/assets/images";
import { LuPaperclip } from "react-icons/lu";
import { IoPaperPlaneOutline } from "react-icons/io5";

const formSchema = z.object({
  message: z.string().min(2, {
    message: "Please write your message",
  }),
});

const ChatBot = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const onSubmit = (values) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  };

  return (
    <div>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"></header>
      <div className="flex-1 overflow-auto p-4 sm:p-6">
        <div className="grid gap-4">
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage
                src={profileUser}
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Acme Inc</div>
                <div className="text-xs text-muted-foreground">2:39 PM</div>
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
                <div className="text-xs text-primary-foreground/80">
                  2:40 PM
                </div>
              </div>
              <div>
                <p>Hi, I have a question about your product.</p>
              </div>
            </div>
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage
                src={profileUser}
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="h-10 w-10 shrink-0">
              <AvatarImage
                src={profileUser}
                alt="@shadcn"
                className="object-cover"
              />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1 rounded-lg bg-muted p-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="font-medium">Acme Inc</div>
                <div className="text-xs text-muted-foreground">2:41 PM</div>
              </div>
              <div>
                <p>Sure, how can I help you with that?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky bottom-0 z-10 flex h-16 items-center gap-2 border-t bg-background px-4">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center w-full"
        >
          <Input
            type="text"
            name="message"
            {...form.register("message")}
            placeholder="Type your message..."
            className="flex-1 rounded-lg bg-muted px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <Button type="button" variant="ghost" size="icon">
            <LuPaperclip className="h-5 w-5" />
            <span className="sr-only">Attach file</span>
          </Button>
          <Button
            disabled={form.watch("message").length === 0}
            type="submit"
            size="icon"
          >
            <IoPaperPlaneOutline className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;
