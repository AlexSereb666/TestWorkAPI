import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-com',
  templateUrl: './show-com.component.html',
  styleUrls: ['./show-com.component.css']
})
export class ShowComComponent implements OnInit {

  constructor(private service:SharedService) { }

  CommentList:any=[];

  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  CommentIdFilter:string="";
  CommentNameFilter:string="";
  CommentListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCommentList();
  }

  refreshCommentList(){
    this.service.getComList().subscribe(data=>{
      this.CommentList=data;
      this.CommentListWithoutFilter=data;
    });
  }

  deleteClick(item:any){
    if(confirm('Удалить объект?')){
      this.service.deleteComment(item.CommentId).subscribe(data=>{
        alert(data.toString());
        this.refreshCommentList();
      })
    }
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Редактирование сообщения";
    this.ActivateAddEditDepComp=true;
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshCommentList();
  }

  FilterFn(){
    var CommentIdFilter=this.CommentIdFilter;
    var CommentNameFilter=this.CommentNameFilter;

    this.CommentList=this.CommentListWithoutFilter.filter(function (el:any){
      return el.IdContact.toString().toLowerCase().includes(
        CommentIdFilter.toString().trim().toLowerCase()
      )&&
      el.IdTheme.toString().toLowerCase().includes(
        CommentNameFilter.toString().trim().toLowerCase()
      )
    });
  }

  sortResult(prop:any,asc:any){
    this.CommentList = this.CommentListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
}
}
