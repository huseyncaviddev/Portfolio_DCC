/**
 * Email Configuration Test Script
 * Run this to verify your email settings work before testing the contact form
 *
 * Usage: node test-email.js
 */

import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

// Load environment variables
dotenv.config({ path: '.env.local' });

console.log('\n🔍 Testing Email Configuration...\n');

// Check if credentials are set
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
  console.error('❌ ERROR: Email credentials not found!');
  console.error('');
  console.error('Please edit .env.local and set:');
  console.error('  EMAIL_USER=your-email@gmail.com');
  console.error('  EMAIL_PASSWORD=your-app-password');
  console.error('');
  console.error('📖 See instructions in .env.local.example');
  process.exit(1);
}

// Check if using placeholder values
if (process.env.EMAIL_USER.includes('your-email') ||
    process.env.EMAIL_PASSWORD.includes('your-') ||
    process.env.EMAIL_PASSWORD.length < 10) {
  console.error('❌ ERROR: You are still using placeholder values!');
  console.error('');
  console.error('Please edit .env.local with your ACTUAL Gmail credentials:');
  console.error('  1. Go to https://myaccount.google.com/apppasswords');
  console.error('  2. Generate an App Password');
  console.error('  3. Update EMAIL_USER and EMAIL_PASSWORD in .env.local');
  console.error('');
  process.exit(1);
}

console.log('📧 Email User:', process.env.EMAIL_USER);
console.log('🔑 Password Length:', process.env.EMAIL_PASSWORD.length, 'characters');
console.log('');

// Create transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

console.log('🔌 Connecting to Gmail SMTP...');

// Test connection
try {
  await transporter.verify();
  console.log('✅ SUCCESS! Email configuration is working correctly.\n');
  console.log('📬 You can now use the contact form on your website!');
  console.log('');
  console.log('Next steps:');
  console.log('  1. Restart your dev server (npm run dev)');
  console.log('  2. Test the contact form');
  console.log('');
} catch (error) {
  console.error('❌ FAILED! Could not connect to Gmail.\n');
  console.error('Error:', error.message);
  console.error('');
  console.error('Common issues:');
  console.error('  1. App Password is incorrect - Generate a new one');
  console.error('  2. 2-Step Verification not enabled - Enable it first');
  console.error('  3. Using regular password instead of App Password');
  console.error('');
  console.error('📖 Instructions: https://myaccount.google.com/apppasswords');
  console.error('');
  process.exit(1);
}
