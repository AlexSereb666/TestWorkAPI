import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-th',
  templateUrl: './show-th.component.html',
  styleUrls: ['./show-th.component.css']
})
export class ShowThComponent implements OnInit {

  constructor(private service:SharedService) { }

  ThemeList:any=[];

  ModalTitle:string = "";
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  ThemeIdFilter:string="";
  ThemeNameFilter:string="";
  ThemeListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshThemeList();
  }

  addClick(){
    this.dep={
      ThemeId:0,
      ThemeName:""
    }
    this.ModalTitle="Добавить тему";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Редактирование темы";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Удалить объект?')){
      this.service.deleteTheme(item.ThemeId).subscribe(data=>{
        alert(data.toString());
        this.refreshThemeList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshThemeList();
  }

  refreshThemeList(){
    this.service.getThemeList().subscribe(data=>{
      this.ThemeList=data;
      this.ThemeListWithoutFilter=data;
    });
  }

  FilterFn(){
    var ThemeIdFilter = this.ThemeIdFilter;
    var ThemeNameFilter = this.ThemeNameFilter;

    this.ThemeList = this.ThemeListWithoutFilter.filter(function(el:any){
      return el.ThemeId.toString().toLowerCase().inludes(
        ThemeIdFilter.toString().trim().toLowerCase()
      )&&
      el.ThemeName.toString().toLowerCase().inludes(
        ThemeNameFilter.toString().trim().toLowerCase()
      )
    });
  }
}
