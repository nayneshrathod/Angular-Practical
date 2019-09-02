/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExelfileuploadComponent } from './exelfileupload.component';

describe('ExelfileuploadComponent', () => {
  let component: ExelfileuploadComponent;
  let fixture: ComponentFixture<ExelfileuploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExelfileuploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExelfileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
