import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { send } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
  name = '';
  email = '';
  message = '';
  nameTouched = false;
  isSending = signal(false);
  formStatus = signal('');
  formStatusType = signal<'success' | 'error' | ''>('');

  isNameValid(): boolean {
    const words = this.name.trim().split(/\s+/).filter(Boolean);
    return words.length === 4 && words.every((word) => /^[\p{L}\p{M}]+$/u.test(word));
  }

  onNameBlur(): void {
    this.nameTouched = true;
  }

  getFallbackMailto(): string {
    const subject = `Work request from ${this.name.trim()}`;
    const body = `Name: ${this.name.trim()}\nEmail: ${this.email.trim()}\n\nRequest:\n${this.message.trim()}`;

    return `mailto:walaazahir4@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  sendEmail(): void {
    if (!this.isNameValid() || !this.email.trim() || !this.message.trim()) {
      this.nameTouched = true;
      return;
    }

    this.isSending.set(true);
    this.formStatus.set('');
    this.formStatusType.set('');

    const name = this.name.trim();
    const email = this.email.trim();
    const message = this.message.trim();

    send(
      'service_5zj6e3i',
      'template_3mckuhu',
      {
        name,
        email,
        message,
        from_name: name,
        from_email: email,
        reply_to: email,
      },
      'Isx5II6rnR1vwWNh-'
    )
      .then(() => {
        this.formStatus.set('Message sent successfully!');
        this.formStatusType.set('success');
        this.name = '';
        this.email = '';
        this.message = '';
        this.nameTouched = false;
      })
      .catch((error: unknown) => {
        console.error('EmailJS contact form failed:', error);
        const errorText =
          typeof error === 'object' && error !== null && 'text' in error
            ? String(error.text)
            : '';
        const needsGmailReconnect = errorText.includes('Invalid grant');

        this.formStatus.set(
          needsGmailReconnect
            ? 'The email service is temporarily unavailable. You can send your request using your email app below.'
            : 'Could not send your message. Please try again later.'
        );
        this.formStatusType.set('error');
      })
      .finally(() => {
        this.isSending.set(false);
      });
  }
}


