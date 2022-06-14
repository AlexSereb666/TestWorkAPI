import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private service:SharedService) { }

  CommentList:any=[];

  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ngOnInit(): void {
    this.refreshCommentList();
  }

  refreshCommentList(){
    this.service.getComList().subscribe(data=>{
      this.CommentList=data;
    });
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

}
