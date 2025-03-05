"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();

      toast({
        title: "Message Sent!",
        description:
          "Thank you for contacting us. We'll get back to you shortly.",
      });
    }, 1500);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 dark:from-primary/10 dark:to-blue-500/10 -z-10" />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Have a question or want to discuss a project? We'd love to hear from
            you. Reach out to us using the contact information below or fill out
            the form.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Tech Park, Silicon Valley
                      <br />
                      Bangalore, Karnataka 560001
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:info@teamkul.tech"
                        className="hover:text-primary transition-colors"
                      >
                        info@teamkul.tech
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="mailto:support@teamkul.tech"
                        className="hover:text-primary transition-colors"
                      >
                        support@teamkul.tech
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+919876543210"
                        className="hover:text-primary transition-colors"
                      >
                        +91 98765 43210
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a
                        href="tel:+918765432109"
                        className="hover:text-primary transition-colors"
                      >
                        +91 87654 32109
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" aria-label="Facebook">
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" aria-label="Twitter">
                      <Twitter className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </Link>
                  <Link
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="icon" aria-label="YouTube">
                      <Youtube className="h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Monday - Friday:
                    </span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Send Message <Send className="ml-2 h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Location
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Visit us at our office in Bangalore, India.
            </p>
          </div>

          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
            {/* This would be replaced with an actual map in production */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">
                Map placeholder - In a real implementation, this would be an
                interactive Google Map
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">
                What services does TeamKul offer?
              </h3>
              <p className="text-muted-foreground">
                TeamKul offers a comprehensive range of digital services
                including website development, digital marketing, graphic &
                UI/UX design, app development, software solutions, and IT
                support & networking.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                How long does it take to complete a project?
              </h3>
              <p className="text-muted-foreground">
                Project timelines vary depending on the scope and complexity. A
                simple website might take 2-4 weeks, while a complex application
                could take several months. We provide detailed timelines during
                the project planning phase.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                What is your pricing structure?
              </h3>
              <p className="text-muted-foreground">
                Our pricing is project-based and depends on the specific
                requirements, complexity, and timeline. We provide detailed
                quotes after understanding your project needs during the initial
                consultation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Do you offer maintenance services?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer ongoing maintenance and support services for all
                our projects. We have various maintenance packages to ensure
                your digital assets remain secure, up-to-date, and performing
                optimally.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                How do I get started with TeamKul?
              </h3>
              <p className="text-muted-foreground">
                Getting started is easy! Simply contact us through our contact
                form, email, or phone. We'll schedule an initial consultation to
                discuss your project requirements and provide you with a
                proposal.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                Do you work with clients internationally?
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We work with clients globally and have experience
                collaborating with businesses across different time zones. Our
                communication and project management processes are designed to
                ensure smooth collaboration regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
