import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjagadetailComponent } from './penjagadetail.component';

describe('PenjagadetailComponent', () => {
  let component: PenjagadetailComponent;
  let fixture: ComponentFixture<PenjagadetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjagadetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjagadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
