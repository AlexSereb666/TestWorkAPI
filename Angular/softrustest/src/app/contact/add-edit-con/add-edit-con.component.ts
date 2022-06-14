import { MessageBundle } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-con',
  templateUrl: './add-edit-con.component.html',
  styleUrls: ['./add-edit-con.component.css']
})
export class AddEditConComponent implements OnInit {

  constructor(private service:SharedService) { }

  ThemeList:any=[];
  ContactList:any=[];

  @Input() dep:any;
  ContactId:string="";
  ContactName:string="";
  ContactEmail:string="";
  ContactPhone:string="";

  ThemeId:string="";
  ThemeName:string="";
  
  CommentId:string="";
  IdContact:string="";
  IdTheme:string="";
  Content:string="";

  ngOnInit(): void {
    this.ContactId=this.dep.ContactId;
    this.ContactName=this.dep.ContactName;
    this.ContactEmail=this.dep.ContactEmail;
    this.ContactPhone=this.dep.ContactPhone;

    this.CommentId=this.dep.CommentId;
    this.IdContact=this.dep.IdContact;
    this.IdTheme=this.dep.IdTheme;
    this.Content=this.dep.Content;
  }

  updateContact(){
    var val = {ContactId:this.ContactId,
      ContactName:this.ContactName, ContactEmail:this.ContactEmail,
      ContactPhone:this.ContactPhone};
    this.service.updateContact(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  addComment(){ 
    
    this.service.num++;
    var val2 = {CommentId:this.CommentId, IdContact:this.service.num,
      IdTheme:this.ThemeId,
      Content:this.Content};

      this.service.addComment(val2).subscribe(res=>{
        alert(res.toString());
        });
  }

  AddContact(){
    var val1 = {ContactId:this.ContactId,
      ContactName:this.ContactName, ContactEmail:this.ContactEmail, 
      ContactPhone:this.ContactPhone};
      
    this.service.addContact(val1).subscribe(res=>{
    alert(res.toString());
    });
    
    this.addComment();
  }
}
