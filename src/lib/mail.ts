import nodemailer from 'nodemailer';
import { APPLY_FROM_NAME, CONTACT_EMAIL, COORDINATOR_EMAIL } from '@/lib/site';

export function getSmtpCredentials() {
  const user = process.env.ZOHO_USER?.trim();
  const pass = process.env.ZOHO_PASS?.trim();
  if (!user || !pass) return null;
  return { user, pass };
}

export function createMailTransporter() {
  const creds = getSmtpCredentials();
  if (!creds) return null;
  return nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: creds,
  });
}

/** Inbox for new applications, affidavits, and verification forms (coordinator). */
export function getApplyInbox() {
  return process.env.TO_EMAIL?.trim() || COORDINATOR_EMAIL;
}

/** @deprecated Use getApplyInbox — kept for older call sites */
export function getOperatorInbox() {
  return getApplyInbox();
}

/** Public support / verify desk */
export function getSupportInbox() {
  return process.env.SUPPORT_TO_EMAIL?.trim() || CONTACT_EMAIL;
}

export function mailFromAutomated() {
  const address = process.env.MAIL_FROM?.trim() || process.env.ZOHO_USER?.trim() || '';
  if (!address) return '';
  return `"${APPLY_FROM_NAME}" <${address}>`;
}

export function mailUnavailableMessage() {
  return `Applications are temporarily unavailable. Please email ${CONTACT_EMAIL} or try again shortly.`;
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
