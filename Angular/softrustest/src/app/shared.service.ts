import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  num:number=1075;

  getThemeList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Theme');
  }

  addTheme(val:any){
    return this.http.post(this.APIUrl+'/Theme',val);
  }

  updateTheme(val:any){
    return this.http.put(this.APIUrl+'/Theme',val);
  }

  deleteTheme(val:any){
    return this.http.delete(this.APIUrl+'/Theme/'+val);
  }

  getConList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Contact');
  }

  addContact(val:any){
    return this.http.post(this.APIUrl+'/Contact',val);
  }

  updateContact(val:any){
    return this.http.put(this.APIUrl+'/Contact',val);
  }

  deleteContact(val:any){
    return this.http.delete(this.APIUrl+'/Contact/'+val);
  }

  getComList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Comment');
  }

  addComment(val:any){
    return this.http.post(this.APIUrl+'/Comment',val);
  }

  updateComment(val:any){
    return this.http.put(this.APIUrl+'/Comment',val);
  }

  deleteComment(val:any){
    return this.http.delete(this.APIUrl+'/Comment/'+val);
  }

  GetAllThemeName():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Contact/GetAllThemeName');
  }
}
