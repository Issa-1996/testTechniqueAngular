import { Component, OnInit } from '@angular/core';
import { UserModel } from '../Model/User.model';
import { DataApiServiceService } from '../Service/data-api-service.service';
import { TransferdataService } from '../Service/transferdata.service';

@Component({
  selector: 'app-tache-user',
  templateUrl: './tache-user.component.html',
  styleUrls: ['./tache-user.component.css']
})
export class TacheUserComponent implements OnInit {

  constructor (private transferData: TransferdataService , private dataApi: DataApiServiceService) {}

  data: any;
  apiTache:any;
  tache:any;
  ngOnInit(): void {
    this.data=this.transferData.getData(); 
    this.dataApi.getUsersById(this.data).subscribe((data:any)=>{
     this.apiTache=data;
     this.apiTache.forEach((element: any) => {
       if(element.id==this.data.id){
        console.log(element);   
        this.tache=element;  
      }
     });      
    })
         
  }
}
