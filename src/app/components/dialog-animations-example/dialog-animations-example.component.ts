import { ChangeDetectionStrategy, Component, Inject, inject } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ApiService } from '../../service/api.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-dialog-animations-example',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDialogContent],
  templateUrl: './dialog-animations-example.component.html',
  styleUrl: './dialog-animations-example.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleComponent{
  
  constructor( @Inject(MAT_DIALOG_DATA) public data: any ){}

  readonly dialog = inject(MatDialog);
  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: 'dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ){}

  readonly dialogRef = inject(MatDialogRef<DialogAnimationsExampleDialog>);
}
