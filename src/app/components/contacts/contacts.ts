import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { send } from '@emailjs/browser/es/methods/send/send';

@Component({
  selector: 'app-contacts',
  imports: [FormsModule],
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
})
export class Contacts {
 name = '';
  email = '';
  message = '';

sendEmail() {
    if (!this.name || !this.email || !this.message) {
      alert('Please fill all fields');
      return;
    }

   send(
      'service_5zj6e3i',   
      'template_3mckuhu', 
      {
        name: this.name,
        email: this.email,
        message: this.message,
      },
      'Isx5II6rnR1vwWNh-'     
    )
    .then(() => {
      alert('Message sent successfully!');
      this.name = '';
      this.email = '';
      this.message = '';
    })
    .catch((error) => {
      console.error('Failed to send message:', error);
      alert('Failed to send message, please try again later.');
    });
  }
}
