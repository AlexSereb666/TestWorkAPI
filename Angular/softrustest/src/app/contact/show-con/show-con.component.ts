import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-con',
  templateUrl: './show-con.component.html',
  styleUrls: ['./show-con.component.css']
})
export class ShowConComponent implements OnInit {

  constructor(private service:SharedService) { }

  ContactList:any=[];
  

  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ContactIdFilter:string="";
  ContactNameFilter:string="";
  ContactListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshContactList();
  }

  refreshContactList(){
    this.service.getConList().subscribe(data=>{
      this.ContactList=data;
      this.ContactListWithoutFilter=data;
    });
  }

  deleteClick(item:any){
    if(confirm('Удалить контакт?')){
      this.service.deleteContact(item.ContactId).subscribe(data=>{
        alert(data.toString());
        this.refreshContactList();
      })
    }
  }

  addClick(){
    this.dep={
      ContactId:0,
      ContactName:"",
      ContactEmail:"",
      ContactPhone:"",
    }
    this.ModalTitle="Напишите нам!";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Редактирование контакта";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshContactList();
  }

  FilterFn(){
    var ContactIdFilter=this.ContactIdFilter;
    var ContactNameFilter=this.ContactNameFilter;

    this.ContactList=this.ContactListWithoutFilter.filter(function (el:any){
      return el.ContactId.toString().toLowerCase().includes(
        ContactIdFilter.toString().trim().toLowerCase()
      )&&
      el.ContactName.toString().toLowerCase().includes(
        ContactNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any,asc:any){
    this.ContactList = this.ContactListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
