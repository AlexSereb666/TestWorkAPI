import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-th',
  templateUrl: './add-edit-th.component.html',
  styleUrls: ['./add-edit-th.component.css']
})
export class AddEditThComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  ThemeId:string="";
  ThemeName:string="";

  ngOnInit(): void {
    this.ThemeId=this.dep.ThemeId;
    this.ThemeName=this.dep.ThemeName;
  }

  addTheme(){
    var val = {ThemeId:this.ThemeId,
                ThemeName:this.ThemeName};
    this.service.addTheme(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateTheme(){
    var val = {ThemeId:this.ThemeId,
                ThemeName:this.ThemeName};
    this.service.updateTheme(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
