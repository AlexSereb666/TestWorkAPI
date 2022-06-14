import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ContactComponent} from './contact/contact.component';
import {ThemeComponent} from './theme/theme.component';
import {CommentComponent} from './comment/comment.component';


const routes: Routes = [
{path:'contact',component:ContactComponent},
{path:'theme',component:ThemeComponent},
{path:'comment',component:CommentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
