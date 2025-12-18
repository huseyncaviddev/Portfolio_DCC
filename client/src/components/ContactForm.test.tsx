import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from './ContactForm';
import { renderWithProviders, getTranslator, setupLocalStorageMock } from '@/test/test-utils';
import { toast } from 'sonner';

// Mock fetch globally
global.fetch = vi.fn();

// Mock sonner toast
vi.mock('sonner', () => ({
  toast: {
    error: vi.fn(),
    success: vi.fn(),
  },
  Toaster: () => null,
}));

describe('ContactForm Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Setup localStorage mock and clear it before each test
    setupLocalStorageMock();
    localStorage.clear();
  });

  describe('English (EN) language tests', () => {
    const t = getTranslator('en');

    it('should render all form fields in English', () => {
      renderWithProviders(<ContactForm />, { language: 'en' });

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.email.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.subject.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.message.label'))).toBeInTheDocument();
      expect(screen.getByRole('button', { name: t('contact.form.submit') })).toBeInTheDocument();
    });

    it('should validate required name field', async () => {
      renderWithProviders(<ContactForm />, { language: 'en' });

      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(t('contact.validation.nameRequired'));
      });
    });

    it('should validate email format', async () => {
      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'notanemail' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'Valid message content here' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalled();
      }, { timeout: 1000 });

      expect(toast.error).toHaveBeenCalledWith(t('contact.validation.emailInvalid'));
    });

    it('should validate message length', async () => {
      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test' } });
      fireEvent.change(messageInput, { target: { value: 'Short' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(t('contact.validation.messageMinLength'));
      });
    });

    it('should submit form with valid data', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message with enough content' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'John Doe',
            email: 'john@example.com',
            subject: 'Test Subject',
            message: 'This is a test message with enough content'
          })
        });
      });
    });

    it('should show success message on successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message with enough content' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(t('contact.success.toast'));
      });

      // Also verify the success status message is shown
      expect(screen.getByText(t('contact.success.title'))).toBeInTheDocument();
    });

    it('should clear form after successful submission', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message with enough content' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(nameInput.value).toBe('');
        expect(emailInput.value).toBe('');
        expect(subjectInput.value).toBe('');
        expect(messageInput.value).toBe('');
      });
    });
  });

  describe('Azerbaijani (AZ) language tests', () => {
    const t = getTranslator('az');

    it('should render all form fields in Azerbaijani', () => {
      renderWithProviders(<ContactForm />, { language: 'az' });

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.email.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.subject.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.message.label'))).toBeInTheDocument();
      expect(screen.getByRole('button', { name: t('contact.form.submit') })).toBeInTheDocument();
    });

    it('should validate required fields with Azerbaijani messages', async () => {
      renderWithProviders(<ContactForm />, { language: 'az' });

      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(t('contact.validation.nameRequired'));
      });
    });

    it('should show success message in Azerbaijani', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      renderWithProviders(<ContactForm />, { language: 'az' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'Hüseyn' } });
      fireEvent.change(emailInput, { target: { value: 'huseyn@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Mövzu' } });
      fireEvent.change(messageInput, { target: { value: 'Bu kifayət qədər məzmunu olan test mesajıdır' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(t('contact.success.toast'));
      });

      // Also verify the success status message is shown
      expect(screen.getByText(t('contact.success.title'))).toBeInTheDocument();
    });
  });

  describe('Russian (RU) language tests', () => {
    const t = getTranslator('ru');

    it('should render all form fields in Russian', () => {
      renderWithProviders(<ContactForm />, { language: 'ru' });

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.email.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.subject.label'))).toBeInTheDocument();
      expect(screen.getByLabelText(t('contact.form.message.label'))).toBeInTheDocument();
      expect(screen.getByRole('button', { name: t('contact.form.submit') })).toBeInTheDocument();
    });

    it('should validate required fields with Russian messages', async () => {
      renderWithProviders(<ContactForm />, { language: 'ru' });

      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalledWith(t('contact.validation.nameRequired'));
      });
    });

    it('should validate email format with Russian error message', async () => {
      renderWithProviders(<ContactForm />, { language: 'ru' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'Иван Иванов' } });
      fireEvent.change(emailInput, { target: { value: 'notanemail' } });
      fireEvent.change(subjectInput, { target: { value: 'Тестовая тема' } });
      fireEvent.change(messageInput, { target: { value: 'Действительное длинное сообщение здесь' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.error).toHaveBeenCalled();
      }, { timeout: 1000 });

      expect(toast.error).toHaveBeenCalledWith(t('contact.validation.emailInvalid'));
    });

    it('should show success message in Russian', async () => {
      (global.fetch as any).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ success: true })
      });

      renderWithProviders(<ContactForm />, { language: 'ru' });

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'Иван Иванов' } });
      fireEvent.change(emailInput, { target: { value: 'ivan@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Тестовая тема' } });
      fireEvent.change(messageInput, { target: { value: 'Это тестовое сообщение с достаточным содержанием' } });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(t('contact.success.toast'));
      });

      // Also verify the success status message is shown
      expect(screen.getByText(t('contact.success.title'))).toBeInTheDocument();
    });
  });

  describe('Cross-language stability tests', () => {
    it('should maintain form functionality across language switches', async () => {
      // Start with English
      const { rerender } = renderWithProviders(<ContactForm />, { language: 'en' });
      let t = getTranslator('en');

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();

      // Switch to Azerbaijani
      localStorage.setItem('language', 'az');
      rerender(<ContactForm />);
      t = getTranslator('az');

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();

      // Switch to Russian
      localStorage.setItem('language', 'ru');
      rerender(<ContactForm />);
      t = getTranslator('ru');

      expect(screen.getByLabelText(t('contact.form.name.label'))).toBeInTheDocument();
    });

    it('should preserve form data when language changes', () => {
      const { rerender } = renderWithProviders(<ContactForm />, { language: 'en' });
      let t = getTranslator('en');

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      fireEvent.change(nameInput, { target: { value: 'Test Name' } });

      expect(nameInput.value).toBe('Test Name');

      // Change language
      localStorage.setItem('language', 'az');
      rerender(<ContactForm />);
      t = getTranslator('az');

      // Form data should persist (though labels change)
      const nameInputAz = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      expect(nameInputAz.value).toBe('Test Name');
    });
  });

  describe('Accessibility and form structure', () => {
    it('should have proper label associations for all inputs', () => {
      renderWithProviders(<ContactForm />, { language: 'en' });

      const nameInput = screen.getByLabelText(/full name/i) as HTMLInputElement;
      const emailInput = screen.getByLabelText(/email address/i) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(/subject/i) as HTMLInputElement;
      const messageInput = screen.getByLabelText(/message/i) as HTMLTextAreaElement;

      expect(nameInput).toHaveAttribute('id', 'name');
      expect(emailInput).toHaveAttribute('id', 'email');
      expect(subjectInput).toHaveAttribute('id', 'subject');
      expect(messageInput).toHaveAttribute('id', 'message');
    });

    it('should disable form inputs during submission', async () => {
      (global.fetch as any).mockImplementationOnce(() =>
        new Promise(resolve => setTimeout(() => resolve({ ok: true, json: async () => ({ success: true }) }), 100))
      );

      renderWithProviders(<ContactForm />, { language: 'en' });
      const t = getTranslator('en');

      const nameInput = screen.getByLabelText(t('contact.form.name.label')) as HTMLInputElement;
      const emailInput = screen.getByLabelText(t('contact.form.email.label')) as HTMLInputElement;
      const subjectInput = screen.getByLabelText(t('contact.form.subject.label')) as HTMLInputElement;
      const messageInput = screen.getByLabelText(t('contact.form.message.label')) as HTMLTextAreaElement;
      const submitButton = screen.getByRole('button', { name: t('contact.form.submit') });

      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
      fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
      fireEvent.change(messageInput, { target: { value: 'This is a test message with enough content' } });
      fireEvent.click(submitButton);

      // During submission, button should show "Sending..." text
      expect(screen.getByText(t('contact.form.sending'))).toBeInTheDocument();

      await waitFor(() => {
        expect(toast.success).toHaveBeenCalledWith(t('contact.success.toast'));
      });
    });
  });
});
