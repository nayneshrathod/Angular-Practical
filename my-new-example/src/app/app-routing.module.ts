import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ContactUsComponent } from './ContactUs/ContactUs.component';
import { ExelfileuploadComponent } from './exelfileupload/exelfileupload.component';
import { ReadcvsdataComponent } from './readcvsdata/readcvsdata.component';


const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'list', component: ListComponent },
{ path: 'contact', component: ContactUsComponent },
{ path: 'Excel_Data', component: ExelfileuploadComponent },
{ path: 'read_exl', component: ReadcvsdataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
