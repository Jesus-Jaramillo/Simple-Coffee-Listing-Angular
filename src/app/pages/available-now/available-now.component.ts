import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


//IMPORTACIONES ANGULAR MATERIAL. (TAMBIEN INCLUYE: ChangeDetectionStrategy)
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';


@Component({
  selector: 'app-available-now',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCardModule, 
    MatDividerModule,
    RouterLink,
    RouterLinkActive
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './available-now.component.html',
  styleUrl: './available-now.component.css'
})
export class AvailableNowComponent implements OnInit{

  data: any[] = []

  constructor(private router: Router,
    private apiService: ApiService,
  ){}

  ngOnInit(): void {   
    this.dataGet();
  }

  routerAllProducts(){
    this.router.navigate([""])
  }

  routerAvailableNow(){
    this.router.navigate(['/availableNow'])
  }

  dataGet(){
    this.apiService.getData().subscribe(data => {
      this.data = data;
    },
    error => {
      console.error('error al cargar la data de las cartas', error)
    }
  )
  }

}
