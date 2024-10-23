import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';

//IMPORTACIONES ANGULAR MATERIAL. (TAMBIEN INCLUYE: ChangeDetectionStrategy)
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    RouterLinkActive,
    RouterLink
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any[] = [];

  constructor(private router: Router,
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.dataGet();
  }


  dataGet() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
    },
      error => {
        console.error('error al cargar la data de las cartas', error)
      }
    )
  }

  routerAllProducts() {
    this.router.navigate([""])
  }

  routerAvailableNow() {
    this.router.navigate(['/availableNow'])
  }
}
