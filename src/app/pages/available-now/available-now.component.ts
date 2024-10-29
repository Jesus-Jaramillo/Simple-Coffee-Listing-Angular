import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogAnimationsExampleComponent, DialogAnimationsExampleDialog } from '../../components/dialog-animations-example/dialog-animations-example.component';

//IMPORTACIONES ANGULAR MATERIAL. (TAMBIEN INCLUYE: ChangeDetectionStrategy)
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-available-now',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    RouterLink,
    RouterLinkActive,
    DialogAnimationsExampleComponent
  ],

  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './available-now.component.html',
  styleUrl: './available-now.component.css'
})
export class AvailableNowComponent implements OnInit {

  data: any[] = []

  constructor(private router: Router,
    private apiService: ApiService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.dataGet();
  }

  /*   routerAllProducts(){
      this.router.navigate([""])
    }
  
    routerAvailableNow(){
      this.router.navigate(['/availableNow'])
    } */

  dataGet() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
    },
      error => {
        console.error('error al cargar la data de las cartas', error)
      }
    )
  }

  openDialog(coffee: any): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '300px',
      data: coffee // Aquí pasamos la data
    });
  }

}
