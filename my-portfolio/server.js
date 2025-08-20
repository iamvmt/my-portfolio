import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

// __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-portfolio-domain.com'] 
    : ['http://localhost:5173', 'http://127.0.0.1:5173'],
  credentials: true
}));
app.use(express.json());

// Serve static frontend files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // or your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use app password for Gmail
    },
  });
};

// Contact endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const transporter = createTransporter();

    // Email to you (the portfolio owner)
    const ownerMailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px;">From:</h3>
              <p style="color: #6b7280; margin: 0; padding: 12px; background-color: #f3f4f6; border-radius: 6px;">
                <strong>${name}</strong> - ${email}
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px;">Subject:</h3>
              <p style="color: #6b7280; margin: 0; padding: 12px; background-color: #f3f4f6; border-radius: 6px;">
                ${subject}
              </p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h3 style="color: #374151; margin-bottom: 8px; font-size: 16px;">Message:</h3>
              <div style="color: #6b7280; padding: 20px; background-color: #f3f4f6; border-radius: 6px; line-height: 1.6;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                Sent from your portfolio contact form
              </p>
            </div>
          </div>
        </div>
      `,
      replyTo: email
    };

    // Confirmation email to the sender
    const senderMailOptions = {
      from: `"Vivek Mani Tripathy" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hi <strong>${name}</strong>,
            </p>
            
            <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Thank you for contacting me! I've received your message about "<strong>${subject}</strong>" 
              and I really appreciate you taking the time to reach out.
            </p>
            
            <p style="color: #6b7280; font-size: 16px; line-height: 1.6; margin-bottom: 30px;">
              I'll review your message and get back to you as soon as possible. Usually, I respond 
              within 24-48 hours.
            </p>
            
            <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin-bottom: 30px;">
              <h3 style="color: #374151; margin-top: 0; margin-bottom: 15px; font-size: 18px;">Your Message Summary:</h3>
              <p style="color: #6b7280; margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>
              <p style="color: #6b7280; margin: 0;"><strong>Message:</strong></p>
              <div style="color: #6b7280; margin-top: 10px; font-style: italic;">
                "${message.length > 150 ? message.substring(0, 150) + '...' : message}"
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #374151; font-size: 16px; margin-bottom: 10px;">
                Best regards,<br>
                <strong>Vivek Mani Tripathy</strong>
              </p>
              <p style="color: #9ca3af; font-size: 14px; margin: 0;">
                Full-Stack Developer & Software Engineer
              </p>
            </div>
          </div>
        </div>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(ownerMailOptions),
      transporter.sendMail(senderMailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Email sent successfully!'
    });

  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler for unknown routes (API only)
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot find ${req.originalUrl} on this server`
  });
});

// React catch-all (must be last)
if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
