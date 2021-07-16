import { UserService } from './../user/user.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'edit-user-dialog',
  templateUrl: './edit-user-dialog.html',
  styles: [
    `
      #cancelBtn {
        white-space: nowrap;
        text-decoration: none;
        vertical-align: baseline;
        text-align: center;
        margin: 0;
        min-width: 64px;
        line-height: 36px;
        padding: 0 16px;
        border-radius: 4px;
        overflow: visible;
        transform: translate3d(0, 0, 0);
        transition: background 400ms;
        cursor: pointer;
      }
    `,
  ],
})
export class editUserDialog {
  userForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<editUserDialog>,
    private fb: FormBuilder,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });

    if (this.data.hasOwnProperty('_id')) {
      this.userForm.patchValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        userName: this.data.userName,
        age: this.data.age,
        gender: this.data.gender,
      });
    }
  }

  updateUserForm(valid, value) {
    if (valid) {
      let body = {
        firstName: value.firstName,
        lastName: value.lastName,
        userName: value.userName,
        age: +value.age,
        gender: value.gender,
      };

      this.userService.updateUser(this.data._id, body).subscribe(
        (res) => {
          this.userService.presentToast(res['message']);
          this.dialogRef.close(true);
        },
        (err) => {
          this.userService.presentToast(err.error.message);
        }
      );
    } else {
      return this.userService.presentToast('Kindly fill all mandatory fields');
    }
  }
}
