import { Component, OnInit } from '@angular/core';
import { ExcelServicesService } from './excel-services.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-exelfileupload',
  templateUrl: './exelfileupload.component.html',
  styleUrls: ['./exelfileupload.component.css']
})
export class ExelfileuploadComponent implements OnInit {
  title = 'excel-upload-download';
  ngOnInit() {
  }
   excel = [];
    constructor(private excelService: ExcelServicesService, private http: HttpClient) {
      this.getJSON().subscribe(data => {
        data.forEach(row => {
          this.excel.push(row);
        });
       });
    }

    exportAsXLSX(): void {
       this.excelService.exportAsExcelFile(this.excel, 'sample');
    }
    public getJSON(): Observable<any> {
      return this.http.get('https://api.myjson.com/bins/zg8of');
    }

}
