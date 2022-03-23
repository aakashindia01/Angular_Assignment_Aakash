import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}  from '@angular/forms'
import { ProfilesRoutingModule } from './profiles-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';





@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe
 
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    FormsModule,
    MatProgressSpinnerModule


  ]
})
export class ProfilesModule { }
