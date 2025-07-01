// pages/api/sendgrid.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use any other email service (e.g. Outlook, Yahoo)
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail/Email address
        pass: process.env.EMAIL_PASS, // App password (not your real password)
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL, // Where you want to receive contact emails
      subject: "New Contact Email",
      text: `New email from: ${email}`,
      html: `<p>New email from: <strong>${email}</strong></p>`,
    });

    return res.status(200).json({ error: null });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
