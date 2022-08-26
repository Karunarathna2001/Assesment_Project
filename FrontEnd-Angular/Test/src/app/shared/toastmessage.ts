import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastMsgService {

  constructor(private snackbar: MatSnackBar) {
  }

  showSuccessToast(msg: string) {
    this.snackbar.open(msg, 'X', {
      duration: 4 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-simple-snackbar-action', 'green-snackbar'],
    });
  }

  showErrorToast(msg: string) {
    this.snackbar.open(msg, 'X', {
      duration: 4 * 1000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['mat-simple-snackbar-action', 'red-snackbar'],
    });
  }
}
