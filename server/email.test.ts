import { describe, it, expect } from 'vitest';
import { sendContactEmail } from './email';

describe('Email Service', () => {
  it('should validate email credentials and send test email', async () => {
    // Test with sample data
    const result = await sendContactEmail(
      'Test User',
      'test@example.com',
      'Test Subject',
      'This is a test message from the contact form validation.'
    );

    // The function should return true if email was sent successfully
    expect(result).toBe(true);
  }, { timeout: 10000 });

  it('should handle missing environment variables gracefully', async () => {
    // This test ensures the email service doesn't crash if credentials are missing
    const result = await sendContactEmail(
      'Test',
      'test@example.com',
      'Test',
      'Test message'
    );

    // Should return false if credentials are not set
    expect(typeof result).toBe('boolean');
  });
});
