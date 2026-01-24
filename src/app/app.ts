import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { About } from './components/about/about';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';
import { Notfound } from './components/notfound/notfound';
import { MiniProj } from './components/mini-proj/mini-proj';
import { Contacts } from './components/contacts/contacts';
import { MyCert } from './components/my-cert/my-cert';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Footer, Navbar, Home, Notfound, MiniProj, Contacts, MyCert],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
