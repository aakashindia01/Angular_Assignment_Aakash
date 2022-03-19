import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { PostsComponent } from './components/posts/posts.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {path:'',component:SummaryComponent},
  {path:'summary', component:SummaryComponent},
  {path:'albums',component:AlbumsComponent},
  {path:'posts',component:PostsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SummaryRoutingModule { }
