"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { sendEmail } from "../actions/send-email";
import { toast } from "sonner";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setPending(true);
    const res = await sendEmail(formData);
    if (res.success) {
      toast.success("Email sent successfully!");
    } else {
      toast.error(res.error);
    }
    setPending(false);
  };

  return (
    <form
      className="space-y-6 bg-card/80 rounded-lg p-6 border shadow flex flex-col flex-1"
      onSubmit={handleSubmit}
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
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[0-9\-\+\s()]{7,}"
          placeholder="09xx xxx xxxx"
          autoComplete="tel"
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

      <Button
        type="submit"
        className="w-full mt-2 cursor-pointer"
        disabled={pending}
      >
        {pending ? "Sending..." : "Send"}
      </Button>
    </form>
  );
}
