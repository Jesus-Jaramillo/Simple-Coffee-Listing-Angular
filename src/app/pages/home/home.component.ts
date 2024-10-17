import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../components/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{


  constructor(){}

  ngOnInit(): void {
  }

}
