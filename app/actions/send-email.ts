"use server";
//send email using nodemailer
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const phone = formData.get("phone")?.toString() || "No phone provided";
  const email = formData.get("email")?.toString() || "No email provided";
  const message = formData.get("message")?.toString() || "No message provided";
  const to = process.env.GOOGLE_EMAIL;
  const subject = `New message from ${phone} (${email})`;
  // Plain text only, so visitor input can't inject HTML into the inbox.
  const text = `You have a new message from ${phone} (${email}):\n\n${message}`;

  // Create a transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GOOGLE_EMAIL,
      pass: process.env.GOOGLE_APP_PASSWORD,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      to,
      replyTo: email,
      subject,
      text,
    });

    if (emailRes.rejected.length > 0) {
      return { success: false, error: emailRes.rejected.join(", ") };
    }
    return { success: true, error: emailRes.response };
  } catch (err) {
    console.error("sendEmail failed:", err);
    return {
      success: false,
      error: `Couldn't send your message. Please email me directly at ${to}.`,
    };
  }
}
