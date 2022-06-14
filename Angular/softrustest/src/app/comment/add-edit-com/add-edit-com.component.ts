import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-com',
  templateUrl: './add-edit-com.component.html',
  styleUrls: ['./add-edit-com.component.css']
})
export class AddEditComComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  CommentId:string="";
  IdContact:string="";
  IdTheme:string="";
  Content:string="";

  ngOnInit(): void {
    this.CommentId=this.dep.CommentId;
    this.IdContact=this.dep.IdContact;
    this.IdTheme=this.dep.IdTheme;
    this.Content=this.dep.Content;
  }

  updateComment(){
    var val = {CommentId:this.CommentId,
      IdContact:this.IdContact, IdTheme:this.IdTheme,
    Content:this.Content};
    this.service.updateComment(val).subscribe(res=>{
      alert(res.toString());
    });
  }



}
