import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryComponent } from './components/summary/summary.component';
import { PostsComponent } from './components/posts/posts.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    SummaryComponent,
    PostsComponent,
    AlbumsComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    MatProgressSpinnerModule

  ]
})
export class SummaryModule { }
