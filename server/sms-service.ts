import twilio from 'twilio';
import type { InsertContactInquiry } from '@shared/schema';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromPhone = process.env.TWILIO_PHONE_NUMBER;
const toPhone = process.env.BUSINESS_PHONE_NUMBER || '+916304446003'; // Default to business phone

let client: twilio.Twilio | null = null;

// Initialize Twilio client if credentials are provided
if (accountSid && authToken) {
  client = twilio(accountSid, authToken);
}

export async function sendContactNotification(inquiry: InsertContactInquiry): Promise<boolean> {
  // If Twilio is not configured, log the inquiry instead
  if (!client || !fromPhone) {
    console.log('📱 SMS not configured. Contact inquiry received:');
    console.log(`Name: ${inquiry.firstName} ${inquiry.lastName}`);
    console.log(`Phone: ${inquiry.phone}`);
    console.log(`Email: ${inquiry.email}`);
    console.log(`Project: ${inquiry.projectType}`);
    console.log(`Message: ${inquiry.message}`);
    return false;
  }

  try {
    const messageBody = `
🏠 New Interior Design Inquiry!

Name: ${inquiry.firstName} ${inquiry.lastName}
Phone: ${inquiry.phone}
Email: ${inquiry.email}
Project Type: ${inquiry.projectType}

Message: ${inquiry.message}

Please contact the customer for quotation.
    `.trim();

    const message = await client.messages.create({
      body: messageBody,
      from: fromPhone,
      to: toPhone,
    });

    console.log(`✅ SMS sent successfully. Message SID: ${message.sid}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send SMS:', error);
    return false;
  }
}

export async function sendWhatsAppNotification(inquiry: InsertContactInquiry): Promise<boolean> {
  // WhatsApp uses Twilio's WhatsApp API
  if (!client || !fromPhone) {
    console.log('📱 WhatsApp not configured. Contact inquiry logged above.');
    return false;
  }

  try {
    const messageBody = `
🏠 *New Interior Design Inquiry*

*Name:* ${inquiry.firstName} ${inquiry.lastName}
*Phone:* ${inquiry.phone}
*Email:* ${inquiry.email}
*Project Type:* ${inquiry.projectType}

*Message:* ${inquiry.message}

Please contact the customer for quotation.
    `.trim();

    // WhatsApp format uses whatsapp: prefix
    const whatsappTo = `whatsapp:${toPhone}`;
    const whatsappFrom = `whatsapp:${fromPhone}`;

    const message = await client.messages.create({
      body: messageBody,
      from: whatsappFrom,
      to: whatsappTo,
    });

    console.log(`✅ WhatsApp message sent successfully. Message SID: ${message.sid}`);
    return true;
  } catch (error) {
    console.error('❌ Failed to send WhatsApp message:', error);
    return false;
  }
} 