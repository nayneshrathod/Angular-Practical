import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from './CSVModel';

@Component({
  selector: 'app-readcvsdata',
  templateUrl: './readcvsdata.component.html',
  styleUrls: ['./readcvsdata.component.css']
})
export class ReadcvsdataComponent implements OnInit {
  title = 'Angular7-readCSV';
  ngOnInit() { }
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  uploadListener($event: any): void {

    let text = [];
    let files = $event.srcElement.files;

    if (this.isValidCSVFile(files[0])) {

      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);

      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);

        let headersRow = this.getHeaderArray(csvRecordsArray);

        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };

      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };

    } else {
      alert("Please import valid .csv file.");
      this.fileReset();
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = [];

    for (let i = 1; i < csvRecordsArray.length; i++) {
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');
      if (curruntRecord.length == headerLength) {
        let csvRecord: CSVRecord = new CSVRecord();
        csvRecord.Name = curruntRecord[0].trim();
        csvRecord.Birthday = curruntRecord[1].trim();
        csvRecord.Photo = curruntRecord[2].toString();
        csvRecord.Group = curruntRecord[3].trim();
        csvRecord.Email = curruntRecord[4].trim();
        csvRecord.Phone = curruntRecord[5].trim();
        csvRecord.address = curruntRecord[6].trim();
        csvRecord.state = curruntRecord[7].trim();
        csvRecord.Country = curruntRecord[8].trim();
        csvRecord.Orgn = curruntRecord[9].trim();
        csvRecord.Website = curruntRecord[10].trim();
        csvArr.push(csvRecord);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }

  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(',');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }

  fileReset() {
    this.csvReader.nativeElement.value = "";
    this.records = [];
  }
}
