import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DataApiServiceService } from '../Service/data-api-service.service';
import { TacheUserComponent } from '../tache-user/tache-user.component';
import { UserModel } from '../Model/User.model';
import { TransferdataService } from '../Service/transferdata.service';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css'],
})
export class UtilisateurComponent implements AfterViewInit, OnInit {
  constructor (private transferData: TransferdataService , private dataApi: DataApiServiceService, public dialog: MatDialog) {}

  openDialog(element: UserModel) {
    this.transferData.setData(element);
    
    const dialogRef = this.dialog.open(TacheUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.listeUsers();
  }

  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website','detail'];
  dataSource = new MatTableDataSource<any>([]);

  listeUsers() {
    this.dataApi.getUsers().subscribe((data: any) => {
      // this.dataSource = data;
      this.dataSource = new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
