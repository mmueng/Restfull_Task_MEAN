import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// register service
import { HttpService } from './http.service';
// import httpclient
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule.
import { HttpClient } from 'selenium-webdriver/http';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, // <-- register FormsModule with our app.
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
