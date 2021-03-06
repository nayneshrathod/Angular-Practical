import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { ExelfileuploadComponent } from './exelfileupload/exelfileupload.component';
import { ReadcvsdataComponent } from './readcvsdata/readcvsdata.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      ListComponent,
      ContactUsComponent,
      ExelfileuploadComponent,
      ReadcvsdataComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
