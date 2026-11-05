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
      title: 'Landing Page', desc: 'Cosmatic E-Commerce app built by using React.',
      img: '/images/cos.png', demo: 'https://lume-ruby-nu.vercel.app/', github: 'https://github.com/walaazahir4/LUME.git'
    },
     {
      title: 'Landing Page', desc: 'E-Commerce app built by using React.',
      img: '/images/burger.png', demo: 'https://burgerko-othuov310-walaa-zahirs-projects.vercel.app/', github: 'https://github.com/walaazahir4/burgerko.git'
    },
    {
      title: 'To-Do List', desc: 'A simple to-do list app built with HTML, CSS, and JavaScript.',
      img: '/images/015.png', demo: 'https://walaazahir4.github.io/codeAlpha-ToDoList/', github: 'https://github.com/walaazahir4/codeAlpha-ToDoList.git'
    },

    {
      title: 'Tic-Tac', desc: 'A simple Tic-Tac game built using Angular & Bootstrap.',
      img: '/images/011.png', demo: 'https://walaazahir4.github.io/Tic-Tac/', github: 'https://github.com/walaazahir4/Tic-Tac.git'
    },

    {
      title: 'Image Gallery', desc: 'A responsive image gallery built with HTML, CSS, and JavaScript.',
      img: '/images/013.png', demo: 'https://walaazahir4.github.io/codeAlpha-imageGallery/', github: 'https://github.com/walaazahir4/codeAlpha-imageGallery.git'
    },

    {
      title: 'Music Player', desc: 'A simple music player built with HTML, CSS, and JavaScript.',
      img: '/images/014.png', demo: 'https://walaazahir4.github.io/codeAlpha-musicPlayer/', github: 'https://github.com/walaazahir4/codeAlpha-musicPlayer.git'
    },

    {
      title: 'Calculator', desc: 'A simple calculator app built using Angular & Bootstrap.',
      img: '/images/012.png', demo: 'https://walaazahir4.github.io/calculator/', github: 'https://github.com/walaazahir4/calculator.git'
    }   
    
  ]


goBack(){
    window.history.back();
  }
}
