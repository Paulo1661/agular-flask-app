import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TwitterCloneComponent } from './twitter-clone/twitter-clone.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twit', component: TwitterCloneComponent}
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
