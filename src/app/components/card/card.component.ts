import { CommonModule} from '@angular/common';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../service/api.service';

//IMPORTACIONES ANGULAR MATERIAL. (TAMBIEN INCLUYE: ChangeDetectionStrategy)
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any[] = []; 

  constructor( private apiService: ApiService ){}

  ngOnInit(): void {
    this.dataGet();
  }


  dataGet(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
      // console.log(this.data)
    })
  }

}
