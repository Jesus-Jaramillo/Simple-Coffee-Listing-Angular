import { CommonModule } from '@angular/common';
import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router, RouterLinkActive, RouterLink } from '@angular/router';

//IMPORTACIONES ANGULAR MATERIAL. (TAMBIEN INCLUYE: ChangeDetectionStrategy)
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { DialogAnimationsExampleComponent, DialogAnimationsExampleDialog } from '../dialog-animations-example/dialog-animations-example.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    RouterLinkActive,
    RouterLink,
    DialogAnimationsExampleComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  data: any[] = [];

  constructor(private router: Router,
    private apiService: ApiService,
    public dialog: MatDialog,
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

/*   routerAllProducts() {
    this.router.navigate([""])
  }

  routerAvailableNow() {
    this.router.navigate(['/availableNow'])
  } */

    openDialog(coffee: any): void {
      this.dialog.open(DialogAnimationsExampleDialog, {
        width: '300px',
        data: coffee // Aquí pasamos la data
      });
    }

}
