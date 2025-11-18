import type { Express } from "express";
import { createServer, type Server } from "http";
import nodemailer from "nodemailer";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  const mailHost = process.env.MAIL_HOST;
  const mailPort = process.env.MAIL_PORT;
  const mailUsername = process.env.MAIL_USERNAME;
  const mailPassword = process.env.MAIL_PASSWORD;
  const mailFromAddress = process.env.MAIL_FROM_ADDRESS;
  const mailFromName = process.env.MAIL_FROM_NAME;

  let transporter: nodemailer.Transporter | null = null;
  let emailConfigured = false;

  if (mailHost && mailPort && mailUsername && mailPassword) {
    try {
      transporter = nodemailer.createTransport({
        host: mailHost,
        port: Number(mailPort),
        secure: false,
        auth: {
          user: mailUsername,
          pass: mailPassword,
        },
      });

      await transporter.verify();
      emailConfigured = true;
      console.log("✓ Email transport configured and verified successfully");
    } catch (error) {
      console.error("✗ Email transport verification failed:", error);
      console.log("Contact form will log messages instead of sending emails");
    }
  } else {
    console.log("⚠ Email environment variables not configured. Contact form will log messages instead.");
  }

  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);

      if (!emailConfigured || !transporter) {
        console.log("\n📧 Contact Form Submission (Email not configured):");
        console.log(`Name: ${validatedData.name}`);
        console.log(`Email: ${validatedData.email}`);
        console.log(`Message: ${validatedData.message}\n`);
        
        return res.json({ 
          success: true, 
          message: "Message received (logged to console - email not configured)" 
        });
      }

      const mailOptions = {
        from: `"${mailFromName || 'Portfolio Contact'}" <${mailFromAddress || mailUsername}>`,
        to: mailUsername,
        subject: `Portfolio Contact: Message from ${validatedData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${validatedData.name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${validatedData.email}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6;">${validatedData.message}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              This message was sent from your portfolio website contact form.
            </p>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}

Message:
${validatedData.message}

---
This message was sent from your portfolio website contact form.
        `,
      };

      await transporter.sendMail(mailOptions);

      console.log(`✓ Email sent successfully to ${mailUsername} from ${validatedData.email}`);
      res.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }

      console.error("Email error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to send email. Please try again later.",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
