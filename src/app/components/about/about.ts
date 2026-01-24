import { Component } from '@angular/core';
import { send } from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [ FormsModule, RouterModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
 
}
