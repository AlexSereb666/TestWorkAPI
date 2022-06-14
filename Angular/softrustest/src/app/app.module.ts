import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { ShowThComponent } from './theme/show-th/show-th.component';
import { AddEditThComponent } from './theme/add-edit-th/add-edit-th.component';
import { ContactComponent } from './contact/contact.component';
import { ShowConComponent } from './contact/show-con/show-con.component';
import { AddEditConComponent } from './contact/add-edit-con/add-edit-con.component';
import { CommentComponent } from './comment/comment.component';
import { ShowComComponent } from './comment/show-com/show-com.component';
import { AddEditComComponent } from './comment/add-edit-com/add-edit-com.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ShowThComponent,
    AddEditThComponent,
    ContactComponent,
    ShowConComponent,
    AddEditConComponent,
    CommentComponent,
    ShowComComponent,
    AddEditComComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
