import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './gaurds/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component:LoginComponent, pathMatch:'full'},
  
  {path:'profiles', 
  canActivate:[AuthGuard],
  loadChildren: ()=> 
  import('./modules/profiles/profiles.module')
  .then((m)=>m.ProfilesModule),},

  {path:'profile/:id', 
  canActivate:[AuthGuard],
  loadChildren: ()=> 
  import('./modules/summary/summary.module')
  .then((m)=>m.SummaryModule),},

  // {path:'profile/:id', component:ProfileComponent},

  {path: '**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
