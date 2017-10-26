import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiturkosdetailComponent } from './fiturkosdetail.component';

describe('FiturkosdetailComponent', () => {
  let component: FiturkosdetailComponent;
  let fixture: ComponentFixture<FiturkosdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiturkosdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiturkosdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
