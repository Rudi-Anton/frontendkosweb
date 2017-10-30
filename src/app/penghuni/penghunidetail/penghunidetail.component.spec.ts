import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenghunidetailComponent } from './penghunidetail.component';

describe('PenghunidetailComponent', () => {
  let component: PenghunidetailComponent;
  let fixture: ComponentFixture<PenghunidetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenghunidetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenghunidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
