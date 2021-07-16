import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  base_url = environment.base_url;
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  getUserList(body) {
    return this.http.get<any>(
      this.base_url + `/user?skip=${body.skip}&limit=${body.limit}`
    );
  }

  deleteUser(id) {
    return this.http.delete<any>(this.base_url + `/user/${id}`);
  }

  updateUser(id, body) {
    return this.http.patch<any>(this.base_url + `/user/${id}`, body);
  }

  presentToast(message: string) {
    return this.snackBar.open(message, 'OK', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }
}
