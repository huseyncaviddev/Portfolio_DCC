import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast.success("Transmission Received. Awaiting Admin Response.");
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-background min-h-screen">
        <div className="container py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <div className="inline-block border-2 border-black bg-secondary px-4 py-1 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-mono font-bold uppercase">Status: Online</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black uppercase mb-8 tracking-tighter">
                Establish <br/> Connection
              </h1>
              <p className="text-xl font-mono text-muted-foreground mb-12 max-w-md">
                Ready to optimize your infrastructure? Send a signal. Our team is standing by to intercept your request.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Mail className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-lg">Email_Protocol</h3>
                    <p className="font-mono text-muted-foreground">admin@cms-core.sys</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <Phone className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-lg">Voice_Link</h3>
                    <p className="font-mono text-muted-foreground">+1 (555) 019-2834</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 border-2 border-black bg-white flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <MapPin className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="font-bold uppercase text-lg">Physical_Node</h3>
                    <p className="font-mono text-muted-foreground">
                      128 Silicon Ave, Server Block B<br/>
                      Tech District, CA 94043
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="neo-card bg-white p-8 lg:p-12">
              <h2 className="text-2xl font-black uppercase mb-8 border-b-2 border-black pb-4">
                Input_Parameters
              </h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono font-bold uppercase">User_ID / Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter identification..." {...field} className="border-2 border-black rounded-none h-12 font-mono focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono font-bold uppercase">Return_Address / Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter contact protocol..." {...field} className="border-2 border-black rounded-none h-12 font-mono focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono font-bold uppercase">Subject_Header</FormLabel>
                        <FormControl>
                          <Input placeholder="Brief description of inquiry..." {...field} className="border-2 border-black rounded-none h-12 font-mono focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary" />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-mono font-bold uppercase">Payload / Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Detailed system report or request..." {...field} className="border-2 border-black rounded-none min-h-[150px] font-mono focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-primary resize-none" />
                        </FormControl>
                        <FormMessage className="font-mono text-xs text-destructive" />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="neo-button w-full mt-4">
                    Transmit_Data <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
