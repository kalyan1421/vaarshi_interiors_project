import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactInquirySchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Thank you for your inquiry! We will contact you soon with a free quotation.",
        data: inquiry
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({
          success: false,
          message: "Please fill in all required fields correctly",
          errors: error.errors
        });
      } else {
        console.error("Contact form submission error:", error);
        res.status(500).json({
          success: false,
          message: "Something went wrong. Please try again later."
        });
      }
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getAllContactInquiries();
      res.json({
        success: true,
        data: inquiries
      });
    } catch (error) {
      console.error("Error fetching contact inquiries:", error);
      res.status(500).json({
        success: false,
        message: "Failed to fetch contact inquiries"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
