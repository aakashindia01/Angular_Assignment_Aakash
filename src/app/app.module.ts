import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchPipe } from './pipes/search.pipe';
import {FilterPipe} from './pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    SearchPipe,
    FilterPipe,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule, BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
