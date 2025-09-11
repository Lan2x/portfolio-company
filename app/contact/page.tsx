import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageTransition } from "../page-transition";
import ContactForm from "./contact-form";
import { sendEmail } from "../actions/send-email";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-stretch min-h-[420px]">
            {/* Left: Contact form */}
            <div className="flex flex-col h-full justify-center">
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 ">
                Contact Us
              </h1>
              <p className="mb-8 text-muted-foreground">
                We&apos;d love to hear from you.
              </p>
              <ContactForm />
            </div>
            {/* Right: Illustration */}
            <div className="flex justify-center items-center h-full">
              <Image
                src="/contact-us.png"
                alt="Contact illustration"
                width={400}
                height={320}
                className="w-full h-full max-h-[500px] rounded-xl border border-border shadow-sm object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
