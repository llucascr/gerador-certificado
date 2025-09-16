import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar implements OnInit{
  ngOnInit(): void {
    // console.log("Meu componente navbar inicializou")
    this.mensagem()
  }

  mensagem() {
    console.log("Meu componente navbar inicializou (dentro de uma função)")
  }
}
