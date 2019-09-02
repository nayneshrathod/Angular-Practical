import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  obj1: object;
  obj = [
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Aashish narayan patil', city: 'sdgjhfhjdf', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 20, name: 'Khumesh Raghunath Lohar', city: 'Shirpur', country: 'india', phone: 7219767226, website_url: 'http://www.google.com'},
    {id: 26, name: 'naynesh raghunath rathod', city: 'pashte', country: 'india', phone: 8550949497, website_url: 'http://www.google.com'},
    {id: 74, name: 'Prakash Amrutbhai Koli', city: 'NImbhel', country: 'india', phone: 8475241536, website_url: 'http://www.google.com'},
    {id: 5, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214},
    {id: 3, name: 'Sentence 1', city: 'zxy', country: 'india', phone: 85452145214}
];


  constructor(private Http: HttpService) {
  }

  ngOnInit() {
    this.Http.myMethod();
    this.Http.getdata().subscribe(data => {
      this.obj1 = data;
      console.log(this.obj);
    });
  }
}
