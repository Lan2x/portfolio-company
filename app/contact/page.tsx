import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { PageTransition } from "../page-transition";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Contact form */}
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 ">
                Contact Us
              </h1>
              <p className="mb-8 text-muted-foreground">
                We&apos;d love to hear from you.
              </p>
              <form
                className="space-y-6 bg-card/80 rounded-lg p-6 border shadow"
                action={`mailto:${siteConfig.contactEmail}`}
                method="POST"
                encType="text/plain"
              >
                <div>
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help you?"
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full mt-2">
                  Send
                </Button>
              </form>
            </div>
            {/* Right: Illustration */}
            <div className="flex justify-center items-center">
              <Image
                src="/contact-us.png"
                alt="Contact illustration"
                width={400}
                height={320}
                // className="w-full max-w-xs md:max-w-md h-auto"
                className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
