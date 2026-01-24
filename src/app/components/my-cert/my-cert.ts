import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-cert',
  imports: [CommonModule],
  templateUrl: './my-cert.html',
  styleUrl: './my-cert.css',
})
export class MyCert {
  selectedImage: string = '';


  certs = [

    {
      name: 'Web design', issuer: 'NTI',
      date: 'July 2022', img: '/images/cert5.png'
    },


     {
      name: 'HTML & CSS certification', issuer: 'Maraha Tech',
      date: 'April 2023', img: '/images/cert4.png'
    },


    {
      name: 'Angular frontend developer', issuer: 'DEPI',
      date: 'April 2024', img: '/images/cert1.jpg'
    },


    {
      name: 'Bussiness English', issuer: 'DEPI',
      date: 'April 2024', img: '/images/cert3.png'
    },


    {
      name: 'Angular training', issuer: 'Huma-Volve',
      date: 'January 2026', img: '/images/cert2.jpeg'
    },


    {
      name: 'Wainting for next  cert...', issuer: '?',
      date: '', img: '/images/qm.png'
    },
  ]


openImage(img: string) {
  this.selectedImage = img;
}

goBack(){
      window.history.back();
}

}
