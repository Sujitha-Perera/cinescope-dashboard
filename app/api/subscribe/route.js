import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // Nodemailer needs Node runtime

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function buildTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
}

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ success: false, error: "Invalid email" }, { status: 400 });
    }

    const transporter = buildTransporter();

    // 1) Send welcome email to subscriber
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to SJ CodeLab! 🎉",
      text: "You're now subscribed! We'll send you updates about movies and features.",
      html: `<p>Hi there!</p><p>Thanks for subscribing to SJ CodeLab 🎉. You'll get updates about new movies and features.</p>`,
    });

    // 2) Notify admin (optional)
    if (process.env.ADMIN_NOTIFY) {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_NOTIFY,
        subject: "New subscriber",
        text: `New subscriber: ${email}`,
      });
    }

    return NextResponse.json({ success: true, msg: "Welcome email sent!" });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ success: false, error: "Mail send failed" }, { status: 500 });
  }
}
