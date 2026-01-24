import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-proj',
  imports: [CommonModule],
  templateUrl: './mini-proj.html',
  styleUrl: './mini-proj.css',
})
export class MiniProj {

  tasks = [
    {
      title: 'To-Do List', desc: 'A simple to-do list app built with HTML, CSS, and JavaScript.',
      img: '/images/015.png', demo: 'https://walaazahir4.github.io/codeAlpha-ToDoList/', github: ''
    },

    {
      title: 'Tic-Tac', desc: 'A simple Tic-Tac game built using Angular & Bootstrap.',
      img: '/images/011.png', demo: 'https://walaazahir4.github.io/Tic-Tac/', github: ''
    },

    {
      title: 'Image Gallery', desc: 'A responsive image gallery built with HTML, CSS, and JavaScript.',
      img: '/images/013.png', demo: 'https://walaazahir4.github.io/codeAlpha-imageGallery/', github: ''
    },

    {
      title: 'Music Player', desc: 'A simple music player built with HTML, CSS, and JavaScript.',
      img: '/images/014.png', demo: 'https://walaazahir4.github.io/codeAlpha-musicPlayer/', github: ''
    },

    {
      title: 'Calculator', desc: 'A simple calculator app built using Angular & Bootstrap.',
      img: '/images/012.png', demo: 'https://walaazahir4.github.io/calculator/', github: ''
    },
  ]


goBack(){
    window.history.back();
  }
}
