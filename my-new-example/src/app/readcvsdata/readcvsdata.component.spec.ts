/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ReadcvsdataComponent } from './readcvsdata.component';

describe('ReadcvsdataComponent', () => {
  let component: ReadcvsdataComponent;
  let fixture: ComponentFixture<ReadcvsdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadcvsdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcvsdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
