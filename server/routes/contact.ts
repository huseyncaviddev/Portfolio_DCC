import { Router, Request, Response } from 'express';
import { sendContactEmail } from '../email';

const router = Router();

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Validate contact form data
function validateContactData(data: any): data is ContactRequest {
  return (
    typeof data.name === 'string' &&
    typeof data.email === 'string' &&
    typeof data.subject === 'string' &&
    typeof data.message === 'string' &&
    data.name.trim().length > 0 &&
    data.email.trim().length > 0 &&
    data.subject.trim().length > 0 &&
    data.message.trim().length >= 10 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
  );
}

router.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate input
    if (!validateContactData({ name, email, subject, message })) {
      return res.status(400).json({
        success: false,
        message: 'Invalid form data. Please check your inputs.',
      });
    }

    // Send email
    const emailSent = await sendContactEmail(name, email, subject, message);

    if (emailSent) {
      return res.status(200).json({
        success: true,
        message: 'Message sent successfully!',
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again later.',
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred. Please try again later.',
    });
  }
});

export default router;
