# SMS Notification Setup Guide

## 📱 SMS Functionality Added

The website now sends SMS notifications to the business phone number whenever someone submits the contact form.

## 🔧 Setup Instructions

### 1. Twilio Account Setup
1. Sign up for a Twilio account at https://www.twilio.com
2. Get your Account SID and Auth Token from the console
3. Purchase a Twilio phone number for sending SMS

### 2. Environment Variables
Create a `.env` file in the root directory with:

```bash
# Twilio SMS Configuration
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=+1234567890

# Business phone number to receive SMS notifications
BUSINESS_PHONE_NUMBER=+916304446003
```

### 3. Current Configuration
- **Business Phone**: +916304446003 (default)
- **SMS Service**: Twilio
- **Fallback**: If Twilio is not configured, inquiries are logged to console

## 🚀 Testing

### With Twilio Configured:
- SMS will be sent to the business phone when contact form is submitted
- Console will show "✅ SMS sent successfully"

### Without Twilio (Development):
- Inquiry details will be logged to console
- Console will show "📱 SMS not configured"

## 📋 What Gets Sent

When someone submits the contact form, an SMS is sent with:
- Customer name
- Phone number
- Email address
- Project type
- Message/requirements

## 🔧 Customization

You can modify the SMS message format in `server/sms-service.ts`:
- Change the message template
- Add more fields
- Modify the phone number format

## 📞 WhatsApp Support

The system also supports WhatsApp notifications (requires Twilio WhatsApp API setup):
- Same credentials as SMS
- Enhanced formatting with WhatsApp markdown
- Requires WhatsApp Business API approval

## 🌐 Deployment

For production deployment:
1. Set environment variables in your hosting platform
2. Ensure Twilio phone number is verified
3. Test SMS functionality before going live

## 📊 Monitoring

Check the server console for:
- SMS delivery confirmations
- Error messages
- Inquiry logging (when SMS is disabled) 