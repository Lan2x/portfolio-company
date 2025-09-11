"use server";
//send email using nodemailer
import nodemailer from "nodemailer";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function sendEmail(prevState: any, formData: FormData) {
  const phone = formData.get("phone")?.toString() || "No phone provided";
  const email = formData.get("email")?.toString() || "No email provided";
  const message = formData.get("message")?.toString() || "No message provided";
  const to = process.env.GOOGLE_EMAIL;
  const subject = `New message from ${phone} (${email})`;
  const text = `You have a new message from ${phone} (${email}):\n\n${message}`;
  const html = `<p>You have a new message from <strong>${phone}</strong> (${email}):</p><p>${message}</p>`;

  //   // Create a transporter object using SMTP transport
  //   const transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: process.env.GOOGLE_EMAIL,
  //       pass: process.env.GOOGLE_APP_PASSWORD,
  //     },
  //   });

  //   // Send the email
  //   const emailRes = await transporter.sendMail({
  //     to,
  //     subject,
  //     text,
  //     html,
  //   });

  //   //return error

  //   if (emailRes.rejected.length > 0) {
  //     return { success: false, error: emailRes.rejected.join(", ") };
  //   } else {
  //     return { success: true, error: "" };
  //   }

  return { success: true, error: "" };
}
