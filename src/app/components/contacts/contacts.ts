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
//  name = '';
//   email = '';
//   message = '';

// sendEmail() {
//     if (!this.name || !this.email || !this.message) {
//       alert('Please fill all fields');
//       return;
//     }

//    send(
//       'service_5zj6e3i',   
//       'template_3mckuhu', 
//       {
//         name: this.name,
//         email: this.email,
//         message: this.message,
//       },
//       'Isx5II6rnR1vwWNh-'     
//     )
//     .then(() => {
//       alert('Message sent successfully!');
//       this.name = '';
//       this.email = '';
//       this.message = '';
//     })
//     .catch((error) => {
//       console.error('Failed to send message:', error);
//       alert('Failed to send message, please try again later.');
//     });
//   }


name = '';
email = '';
message = '';

nameTouched = false;

// يتحقق إن الاسم 4 كلمات وحروف فقط
isNameValid(): boolean {
  if (!this.name) return false;

  const words = this.name.trim().split(/\s+/);
  if (words.length !== 4) return false;

  const regex = /^[A-Za-z\u0600-\u06FF]+$/; // عربي + إنجليزي
  return words.every(word => regex.test(word));
}

onNameBlur() {
  this.nameTouched = true;
}

sendEmail() {
  // لو الاسم غلط نوقف الإرسال بس من غير alert
  if (!this.isNameValid()) {
    this.nameTouched = true;
    return;
  }

  if (!this.email || !this.message) {
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
      this.nameTouched = false;
    })
    .catch(() => {
      alert('Failed to send message, please try again later.');
    });
}


}


