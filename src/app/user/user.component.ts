import { UserService } from './user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { editUserDialog } from '../models/edit-user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor(private userService: UserService, public dialog: MatDialog) {}
  updateState: Boolean = false;
  pageEvent: PageEvent;
  dataLength = 0;
  nextPageSize = 0
  body = {};

  ngOnInit(): void {
    this.getUserList({});
  }

  displayedColumns: string[] = [
    's.no',
    'firstName',
    'lastName',
    'userName',
    'age',
    'gender',
    'actions',
  ];
  dataSource: any; //= new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }

  getUserList(body) {
    this.userService.getUserList(body).subscribe(
      (res) => {
        this.dataSource = res.data;
        this.dataLength = res.count;
        this.nextPageSize = res.data.length
      },
      (err) => this.userService.presentToast(err.error.message)
    );
  }

  editUser(i, id) {
    const dialogRef = this.dialog.open(editUserDialog, {
      width: '500px',
      data: this.dataSource[i],
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getUserList({});
      }
    });
  }

  deleteUser(id) {
    this.userService.deleteUser(id).subscribe(
      (res) => {
        this.userService.presentToast(res.message);
        this.dataSource = this.dataSource.filter((el) => {
          return el._id !== id;
        });
      },
      (err) => this.userService.presentToast(err.error.message)
    );
  }

  onPaginateChange(event: PageEvent) {
    let page, size;

    page = event.pageIndex;
    size = event.pageSize;

    page = page + 1;
    if (size !== this.body['limit']) {
      this.body['limit'] = size;
      this.paginator.firstPage();
    } else {
      this.body['skip'] = page;
      this.body['limit'] = size;
    }
    this.getUserList(this.body);
  }
}

let ELEMENT_DATA = [
  {
    firstName: 'ravi',
    lastName: 'kishan',
    userName: 'ravi@kishan',
    age: 25,
    gender: 'Male',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'ronny',
    lastName: 'sehgal',
    userName: 'r.sehgal112',
    age: 32,
    gender: 'Male',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'devesh',
    lastName: 'soni',
    userName: 'soni.devesh36',
    age: 20,
    gender: 'Male',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'lavi',
    lastName: 'verma',
    userName: 'lavi34',
    age: 18,
    gender: 'Female',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'rupali',
    lastName: 'malhotra',
    userName: 'malhotra34',
    age: 19,
    gender: 'Female',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'Monty',
    lastName: 'khanna',
    userName: 'm.khanna@223',
    age: 36,
    gender: 'Male',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
  {
    firstName: 'parikshit',
    lastName: 'joshi',
    userName: 'joshi35',
    age: 22,
    gender: 'Male',
    createdAt: '2021-05-20T08:48:15.200Z',
    updatedAt: '2021-05-20T08:48:15.200Z',
    __v: 0,
  },
];
